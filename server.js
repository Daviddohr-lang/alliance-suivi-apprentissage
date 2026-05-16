const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || "127.0.0.1";
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR || ROOT;
const DATA_FILE = path.join(DATA_DIR, "data.json");
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5.4-mini";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (url.pathname === "/api/state" && request.method === "GET") {
      return sendJson(response, await readState());
    }

    if (url.pathname === "/api/state" && request.method === "POST") {
      const state = await readJsonBody(request);
      await fs.mkdir(DATA_DIR, { recursive: true });
      await fs.writeFile(DATA_FILE, JSON.stringify(state, null, 2));
      return sendJson(response, { ok: true });
    }

    if (url.pathname === "/api/christophe" && request.method === "POST") {
      const payload = await readJsonBody(request);
      const reply = await answerWithChristophe(payload);
      return sendJson(response, { reply });
    }

    return serveStatic(url.pathname, response);
  } catch (error) {
    console.error(error);
    sendJson(response, { error: "Erreur serveur" }, 500);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Alliance app available on http://${HOST}:${PORT}`);
});

async function readState() {
  try {
    return JSON.parse(await fs.readFile(DATA_FILE, "utf8"));
  } catch {
    return null;
  }
}

async function readJsonBody(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 5_000_000) {
      throw new Error("Payload too large");
    }
  }

  return body ? JSON.parse(body) : {};
}

async function serveStatic(requestPath, response) {
  const safePath = requestPath === "/" ? "/index.html" : requestPath;
  const filePath = path.normalize(path.join(ROOT, safePath));

  if (!filePath.startsWith(ROOT)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const content = await fs.readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": shouldDisableCache(filePath) ? "no-store" : "public, max-age=3600"
    });
    response.end(content);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}

function shouldDisableCache(filePath) {
  return [".html", ".js", ".css"].includes(path.extname(filePath));
}

async function answerWithChristophe({ learner = {}, message = "" }) {
  if (!process.env.OPENAI_API_KEY) {
    return fallbackChristopheReply(learner, message);
  }

  const apiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: OPENAI_MODEL,
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: "Tu es Christophe, assistant pédagogique de l'organisme Alliance. Réponds en français, de manière claire, concrète et rassurante. Tu dois d'abord aider le stagiaire avec les informations disponibles dans son suivi : progression, modules validés, modules à faire, modalité, référents et coordonnées du centre. Ne réponds pas seulement 'contactez le centre' : donne une explication ou une prochaine action précise. Redirige vers le centre uniquement pour les décisions officielles, absences, validation finale ou urgence."
            }
          ]
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: buildLearnerPrompt(learner, message)
            }
          ]
        }
      ],
      max_output_tokens: 220
    })
  });

  if (!apiResponse.ok) {
    console.error(await apiResponse.text());
    return fallbackChristopheReply(learner, message);
  }

  const data = await apiResponse.json();
  return extractResponseText(data) || fallbackChristopheReply(learner, message);
}

function buildLearnerPrompt(learner, message) {
  const modules = Array.isArray(learner.modules) ? learner.modules : [];
  const done = modules.filter((module) => module.done).map((module) => module.name);
  const pending = modules.filter((module) => !module.done).map((module) => module.name);
  const center = learner.center || {};

  return [
    `Stagiaire: ${learner.name || "Non renseigné"}`,
    `Formation: ${learner.program || "Non renseignée"}`,
    `Modalité: ${learner.modality || "Non renseignée"}`,
    `Progression: ${learner.progress || 0}%`,
    `Présence: ${learner.attendance || 0}%`,
    `Référent pédagogique: ${center.pedagogicalReferent || learner.coach || "Non renseigné"}`,
    `Référent administratif: ${center.adminReferent || "Non renseigné"}`,
    `Modules validés: ${done.length ? done.join(" | ") : "Aucun"}`,
    `Modules à faire: ${pending.length ? pending.join(" | ") : "Aucun"}`,
    `Message du stagiaire: ${message}`
  ].join("\n");
}

function extractResponseText(data) {
  if (typeof data.output_text === "string") {
    return data.output_text;
  }

  return (data.output || [])
    .flatMap((item) => item.content || [])
    .map((content) => content.text || "")
    .join("\n")
    .trim();
}

function fallbackChristopheReply(learner, messageText) {
  const message = String(messageText || "").toLowerCase();
  const progress = learner.progress || 0;
  const modules = Array.isArray(learner.modules) ? learner.modules : [];
  const pending = modules.filter((module) => !module.done);
  const nextModule = pending[0];
  const lessonAnswer = getOvpLessonAnswer(learner, message);

  if (lessonAnswer) {
    return lessonAnswer;
  }

  if (message.includes("absence") || message.includes("absent") || message.includes("retard")) {
    return `Bonjour ${learner.name || ""}. J'ai bien noté votre message. Indiquez la date et le motif de l'absence ou du retard afin que le centre puisse mettre votre suivi à jour.`;
  }

  if (message.includes("progression") || message.includes("avance") || message.includes("valid")) {
    return nextModule
      ? `Bonjour ${learner.name || ""}. Votre progression actuelle est de ${progress}%. La prochaine compétence à travailler est : "${nextModule.name}".`
      : `Bonjour ${learner.name || ""}. Votre progression est de ${progress}%. Toutes les compétences visibles semblent validées.`;
  }

  if (message.includes("code") || message.includes("connexion") || message.includes("compte")) {
    return "Bonjour, c'est Christophe. Pour l'accès stagiaire, utilisez le code remis par le centre. Si le code ne fonctionne pas, contactez le référent administratif.";
  }

  if (message.includes("difficile") || message.includes("difficulté") || message.includes("comprendre") || message.includes("aide")) {
    return nextModule
      ? `Bonjour ${learner.name || ""}. Pour avancer, concentrez-vous sur : "${nextModule.name}". Dites-moi ce qui bloque exactement dans ce module et je vous guiderai.`
      : "Bonjour, c'est Christophe. Dites-moi le nom du module qui pose difficulté et je vous répondrai plus précisément.";
  }

  if (message.includes("stage") || message.includes("entreprise")) {
    return "Bonjour, c'est Christophe. Pour le stage en entreprise, vérifiez avec le centre les dates, les documents nécessaires et le référent à contacter.";
  }

  return nextModule
    ? `Bonjour ${learner.name || ""}, c'est Christophe. Votre prochaine étape visible est : "${nextModule.name}". Posez-moi votre question sur ce module et je vous aiderai plus précisément.`
    : "Bonjour, c'est Christophe. J'ai bien reçu votre message. Posez-moi une question sur un module précis pour que je puisse vous guider.";
}

function getOvpLessonAnswer(learner, message) {
  const name = learner.name || "vous";

  if (hasAny(message, ["site sensible", "sites sensibles", "importance vitale", "oiv", "sensible"])) {
    return `Bonjour ${name}. Un site sensible est un lieu où un incident peut avoir des conséquences importantes : sécurité des personnes, continuité d'un service essentiel, ordre public ou activité stratégique. Un site d'importance vitale est encore plus critique : énergie, transport, santé, télécommunications, eau, défense, etc. Pour un opérateur en vidéoprotection, cela veut dire : appliquer strictement les consignes du site, repérer rapidement une situation anormale, ne pas diffuser les images, tracer les événements et alerter uniquement les personnes autorisées.`;
  }

  if (hasAny(message, ["r82", "installation", "installer", "regle d'installation", "règle d'installation"])) {
    return `Bonjour ${name}. La partie R82 concerne les règles techniques d'installation d'un système de vidéosurveillance. L'idée principale : les caméras doivent être placées pour répondre à un objectif de sécurité précis, sans filmer inutilement des zones privées ou non autorisées. Il faut aussi penser à la qualité des images, à l'information du public, à la conservation limitée des images et à la sécurité d'accès au système.`;
  }

  if (hasAny(message, ["regles republicaines", "règles républicaines", "republique", "république", "laicite", "laïcité"])) {
    return `Bonjour ${name}. Les règles républicaines renvoient aux principes à respecter dans une mission de sécurité : égalité de traitement, neutralité, respect de la loi, respect des libertés individuelles, dignité des personnes et non-discrimination. En vidéoprotection, cela signifie observer une situation sans jugement personnel et agir uniquement dans le cadre légal et les consignes professionnelles.`;
  }

  if (hasAny(message, ["cadre legal", "cadre légal", "loi", "juridique", "code", "csi", "code penal", "code pénal"])) {
    return `Bonjour ${name}. Le cadre légal fixe ce que l'opérateur peut faire et ne peut pas faire. Vous devez connaître les limites : seules les personnes habilitées peuvent accéder aux images, les images ne doivent pas être utilisées à des fins personnelles, leur conservation est limitée, et toute alerte doit suivre les consignes prévues. Le livre VI du CSI encadre les activités de sécurité privée, tandis que le code pénal rappelle les infractions et responsabilités possibles.`;
  }

  if (hasAny(message, ["conservation", "images", "rgpd", "confidentialite", "confidentialité"])) {
    return `Bonjour ${name}. Pour la conservation des images, retenez trois idées : accès limité aux personnes autorisées, durée de conservation limitée, et confidentialité stricte. Un opérateur ne copie pas, ne partage pas et ne commente pas les images en dehors du cadre prévu. Toute consultation ou événement important doit pouvoir être tracé.`;
  }

  if (hasAny(message, ["questionnaire", "qcm", "quiz", "examen", "evaluation", "évaluation"])) {
    return `Bonjour ${name}. Pour préparer le questionnaire OVP, révisez en priorité : règles républicaines, sites sensibles, cadre légal de la vidéoprotection, conservation des images, rôle de l'opérateur, règles d'installation R82 et procédure d'alerte. Une bonne méthode : pour chaque thème, écrivez une définition simple, un exemple concret et ce que l'opérateur doit faire.`;
  }

  if (hasAny(message, ["alerte", "situation anormale", "incident", "conflit", "secours"])) {
    return `Bonjour ${name}. Face à une situation anormale, l'opérateur doit observer, qualifier la situation, garder son calme, suivre les consignes du site, alerter le bon interlocuteur et noter les faits de manière précise. Il ne faut pas improviser ni transmettre l'information à une personne non habilitée.`;
  }

  return "";
}

function hasAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function sendJson(response, data, status = 200) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(data));
}
