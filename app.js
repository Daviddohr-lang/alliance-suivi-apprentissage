const STORAGE_KEY = "alliance-learning-tracker-v1";
const SESSION_KEY = "alliance-session-v1";
const ADMIN_CODE = "ALLIANCE2026";

const defaultCenter = {
  name: "Alliance",
  address: "",
  phone: "",
  email: "",
  adminReferent: "",
  pedagogicalReferent: "",
  logo: ""
};

const programTemplates = {
  ovp: {
    label: "OVP : Opérateur en Video Protection",
    modality: "Présentiel",
    modules: [
      { name: "Objectif pédagogique : connaître la réglementation relative au code de la sécurité privée", done: false },
      { name: "Objectif pédagogique : faire respecter la réglementation", done: false },
      { name: "Objectif pédagogique : prévenir et gérer les situations de conflits", done: false },
      { name: "Objectif pédagogique : agir dans le respect de la loi quant à la conservation des images", done: false },
      { name: "Objectif pédagogique : connaître le fonctionnement de son matériel", done: false },
      { name: "Module : environnement juridique de la vidéoprotection", done: false },
      { name: "Module : environnement juridique national et européen de la vidéoprotection et de la télévidéoprotection", done: false },
      { name: "Module : opérationnel et stratégique", done: false },
      { name: "Module : assurer la sécurité des personnes, des lieux, des espaces ou des bâtiments à l'aide de la vidéoprotection et télévidéoprotection", done: false },
      { name: "Module : maîtriser la communication", done: false },
      { name: "Module : vidéoprotection", done: false },
      { name: "Module : connaître et maîtriser les différents systèmes de sécurité et outils de travail", done: false },
      { name: "Module : maîtriser les systèmes d'exploitation", done: false },
      { name: "Module : environnement juridique de la sécurité privée", done: false },
      { name: "Module : connaître le livre VI du CSI", done: false },
      { name: "Module : connaître les dispositions du code pénal", done: false },
      { name: "Module : les principes de la République Française", done: false },
      { name: "Module : comportemental", done: false },
      { name: "Module : maîtriser la relation avec les interlocuteurs : clients, services de secours, services compétents de l'État", done: false },
      { name: "Module : environnement site sensible et site caractérisé sensible", done: false },
      { name: "Immersion professionnelle : 35 heures de stage en entreprise obligatoire", done: false }
    ]
  },
  ovpDistance: {
    label: "OVP : Opérateur en Video Protection",
    modality: "Distanciel",
    modules: [
      { name: "Distanciel : Vidéoprotection : les règles républicaines", done: false },
      { name: "Distanciel : Vidéoprotection : les sites sensibles et d'importance vitale", done: false },
      { name: "Distanciel : Vidéoprotection : le cadre légal et technique de l'opérateur en vidéosurveillance", done: false },
      { name: "Distanciel : Vidéoprotection : la vidéosurveillance, les règles d'installation R82", done: false },
      { name: "Distanciel : Vidéoprotection : questionnaire OVP", done: false }
    ]
  }
};

const defaultReferentials = [
  {
    id: "ovp-presentiel",
    program: "OVP : Opérateur en Video Protection",
    modality: "Présentiel",
    categories: [
      {
        id: "ovp-presentiel-objectifs",
        title: "Objectifs pédagogiques",
        items: [
          { id: "ovp-presentiel-1", text: "Connaître la réglementation relative au code de la sécurité privée" },
          { id: "ovp-presentiel-2", text: "Faire respecter la réglementation" },
          { id: "ovp-presentiel-3", text: "Prévenir et gérer les situations de conflits" },
          { id: "ovp-presentiel-4", text: "Agir dans le respect de la loi quant à la conservation des images" },
          { id: "ovp-presentiel-5", text: "Connaître le fonctionnement de son matériel" }
        ]
      },
      {
        id: "ovp-presentiel-modules",
        title: "Modules présentiels",
        items: [
          { id: "ovp-presentiel-6", text: "Environnement juridique de la vidéoprotection" },
          { id: "ovp-presentiel-7", text: "Environnement juridique national et européen de la vidéoprotection et de la télévidéoprotection" },
          { id: "ovp-presentiel-8", text: "Opérationnel et stratégique" },
          { id: "ovp-presentiel-9", text: "Assurer la sécurité des personnes, des lieux, des espaces ou des bâtiments à l'aide de la vidéoprotection et télévidéoprotection" },
          { id: "ovp-presentiel-10", text: "Maîtriser la communication" },
          { id: "ovp-presentiel-11", text: "Vidéoprotection" },
          { id: "ovp-presentiel-12", text: "Connaître et maîtriser les différents systèmes de sécurité et outils de travail" },
          { id: "ovp-presentiel-13", text: "Maîtriser les systèmes d'exploitation" },
          { id: "ovp-presentiel-14", text: "Environnement juridique de la sécurité privée" },
          { id: "ovp-presentiel-15", text: "Connaître le livre VI du CSI" },
          { id: "ovp-presentiel-16", text: "Connaître les dispositions du code pénal" },
          { id: "ovp-presentiel-17", text: "Les principes de la République Française" },
          { id: "ovp-presentiel-18", text: "Comportemental" },
          { id: "ovp-presentiel-19", text: "Maîtriser la relation avec les interlocuteurs : clients, services de secours, services compétents de l'État" },
          { id: "ovp-presentiel-20", text: "Environnement site sensible et site caractérisé sensible" },
          { id: "ovp-presentiel-21", text: "Immersion professionnelle : 35 heures de stage en entreprise obligatoire" }
        ]
      }
    ]
  },
  {
    id: "ovp-distanciel",
    program: "OVP : Opérateur en Video Protection",
    modality: "Distanciel",
    categories: [
      {
        id: "ovp-distanciel-videoprotection",
        title: "Vidéoprotection",
        items: [
          { id: "ovp-distanciel-1", text: "Les règles républicaines" },
          { id: "ovp-distanciel-2", text: "Les sites sensibles et d'importance vitale" },
          { id: "ovp-distanciel-3", text: "Le cadre légal et technique de l'opérateur en vidéosurveillance" },
          { id: "ovp-distanciel-4", text: "La vidéosurveillance, les règles d'installation R82" },
          { id: "ovp-distanciel-5", text: "Questionnaire OVP" }
        ]
      }
    ]
  }
];

const trainingPrograms = [
  "OVP : Opérateur en Video Protection",
  "A2SP : Agent de Sûreté et de Sécurité Privée",
  "DSP : Dirigeant d'Entreprise de Sécurité Privée",
  "FPA : Formateur Pour Adulte"
];

const defaultLearners = [
  {
    id: crypto.randomUUID(),
    name: "Samira Benali",
    program: "OVP : Opérateur en Video Protection",
    coach: "Nadia M.",
    modality: "Présentiel",
    startDate: "2026-02-03",
    status: "Actif",
    attendance: 92,
    modules: structuredClone(programTemplates.ovp.modules),
    notes: [
      { date: "2026-05-10", type: "Objectif hebdomadaire", text: "Travailler la présentation d'un parcours professionnel." }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Lucas Martin",
    program: "A2SP : Agent de Sûreté et de Sécurité Privée",
    coach: "Karim B.",
    modality: "Distanciel",
    startDate: "2026-01-22",
    status: "À risque",
    attendance: 64,
    modules: [
      { name: "Prise en main ordinateur", done: true },
      { name: "Messagerie", done: false },
      { name: "Démarches en ligne", done: false },
      { name: "Sécurité numérique", done: false }
    ],
    notes: [
      { date: "2026-05-13", type: "Alerte absence", text: "Deux absences consécutives. Appel prévu avec le référent." }
    ]
  },
  {
    id: crypto.randomUUID(),
    name: "Aïcha Diallo",
    program: "FPA : Formateur Pour Adulte",
    coach: "Claire T.",
    modality: "Hybride",
    startDate: "2026-03-18",
    status: "Actif",
    attendance: 87,
    modules: [
      { name: "Positionnement", done: true },
      { name: "Mathématiques pratiques", done: true },
      { name: "Lecture de consignes", done: true },
      { name: "Projet final", done: false }
    ],
    notes: [
      { date: "2026-05-08", type: "Entretien", text: "Bonne progression. Prévoir un exercice d'autonomie sur le budget." }
    ]
  }
];

const defaultTutors = [
  {
    id: crypto.randomUUID(),
    learnerId: defaultLearners[0].id,
    firstName: "Jean",
    lastName: "Dupont",
    position: "Tuteur entreprise",
    company: "Entreprise partenaire",
    diploma: defaultLearners[0].program,
    phone: "06 00 00 00 00",
    email: "tuteur@entreprise.fr",
    accessCode: "TUT-2026",
    notes: "Point d'accueil réalisé. Prévoir un retour sur les premières missions.",
    messages: [
      {
        id: crypto.randomUUID(),
        sender: "Centre",
        text: "Bonjour, nous vous confirmons le démarrage du suivi du stagiaire.",
        date: "2026-05-16T09:00:00.000Z"
      }
    ]
  }
];

const defaultTrainers = [
  {
    id: crypto.randomUUID(),
    firstName: "Claire",
    lastName: "Durand",
    specialties: ["OVP - Vidéoprotection", "Préparation examen"],
    phone: "06 00 00 00 01",
    email: "formateur@alliance.fr",
    learnerIds: [defaultLearners[0].id],
    notes: "Référente pédagogique OVP. Suit les présences, compétences et préparation examen.",
    accessCode: "FORM-2026"
  }
];

const profileAccess = [
  {
    title: "Centre de formation / Alliance",
    badge: "Accès complet",
    intent: "Alliance pilote l'ensemble du suivi et garde la vision complète.",
    canSee: [
      "dossiers apprentis",
      "contrats",
      "assiduité",
      "progression pédagogique",
      "documents",
      "alertes",
      "examens",
      "statistiques",
      "conformité Qualiopi / OPCO"
    ]
  },
  {
    title: "Formateur",
    badge: "Accès pédagogique",
    intent: "Le formateur renseigne le suivi pédagogique et la préparation examen.",
    canSee: [
      "présences",
      "évaluations",
      "compétences OVP acquises",
      "observations",
      "difficultés",
      "travaux à rendre",
      "préparation examen"
    ]
  },
  {
    title: "Tuteur entreprise",
    badge: "Accès entreprise",
    intent: "Le tuteur suit uniquement la partie entreprise du stagiaire rattaché.",
    canSee: [
      "missions réalisées en entreprise",
      "comportement professionnel",
      "ponctualité",
      "autonomie",
      "respect des consignes",
      "utilisation des outils vidéo",
      "observations terrain",
      "alertes éventuelles"
    ]
  },
  {
    title: "Apprenti / stagiaire",
    badge: "Accès personnel",
    intent: "Le stagiaire consulte son parcours et dépose ses justificatifs ou demandes.",
    canSee: [
      "planning",
      "progression",
      "documents",
      "évaluations",
      "objectifs",
      "messages",
      "absences",
      "travaux à remettre",
      "justificatifs d'absence",
      "documents administratifs",
      "comptes rendus",
      "demandes particulières"
    ]
  }
];

const profileHomePages = [
  {
    title: "Alliance",
    subtitle: "Tableau de bord global",
    type: "metrics"
  },
  {
    title: "Formateur",
    subtitle: "Accueil pédagogique",
    type: "list",
    items: [
      "ses groupes",
      "les séances du jour",
      "les feuilles d'émargement",
      "les évaluations à compléter",
      "les apprentis en difficulté"
    ]
  },
  {
    title: "Tuteur entreprise",
    subtitle: "Accueil entreprise",
    type: "list",
    items: [
      "ses apprentis",
      "les bilans à compléter",
      "les prochaines visites",
      "les alertes à traiter"
    ]
  },
  {
    title: "Apprenti / stagiaire",
    subtitle: "Accueil personnel",
    type: "list",
    items: [
      "son planning",
      "son taux de présence",
      "ses compétences validées",
      "ses documents manquants",
      "ses prochaines échéances"
    ]
  }
];

let state = loadState();
let selectedLearnerId = state.learners[0]?.id || null;
let selectedMessageLearnerId = state.learners[0]?.id || null;
let currentTraineeId = null;
let currentTrainerId = null;
let currentTutorId = null;
let currentRole = null;

const views = {
  dashboard: document.querySelector("#dashboardView"),
  profiles: document.querySelector("#profilesView"),
  referentials: document.querySelector("#referentialsView"),
  learners: document.querySelector("#learnersView"),
  trainers: document.querySelector("#trainersView"),
  tutors: document.querySelector("#tutorsView"),
  followup: document.querySelector("#followupView"),
  messages: document.querySelector("#messagesView"),
  trainee: document.querySelector("#traineeView"),
  center: document.querySelector("#centerView")
};

const metricGrid = document.querySelector("#metricGrid");
const riskList = document.querySelector("#riskList");
const riskCount = document.querySelector("#riskCount");
const programList = document.querySelector("#programList");
const profileGrid = document.querySelector("#profileGrid");
const profileHomeGrid = document.querySelector("#profileHomeGrid");
const referentialItemForm = document.querySelector("#referentialItemForm");
const referentialProgram = document.querySelector("#referentialProgram");
const referentialList = document.querySelector("#referentialList");
const referentialCount = document.querySelector("#referentialCount");
const learnerList = document.querySelector("#learnerList");
const detailPanel = document.querySelector("#detailPanel");
const searchInput = document.querySelector("#searchInput");
const statusFilter = document.querySelector("#statusFilter");
const timeline = document.querySelector("#timeline");
const noteLearner = document.querySelector("#noteLearner");
const learnerDialog = document.querySelector("#learnerDialog");
const learnerForm = document.querySelector("#learnerForm");
const trainerForm = document.querySelector("#trainerForm");
const trainerLearners = document.querySelector("#trainerLearners");
const trainerList = document.querySelector("#trainerList");
const trainerCount = document.querySelector("#trainerCount");
const tutorForm = document.querySelector("#tutorForm");
const tutorLearner = document.querySelector("#tutorLearner");
const tutorList = document.querySelector("#tutorList");
const tutorCount = document.querySelector("#tutorCount");
const noteForm = document.querySelector("#noteForm");
const messageLearnerList = document.querySelector("#messageLearnerList");
const chatHeading = document.querySelector("#chatHeading");
const chatThread = document.querySelector("#chatThread");
const messageForm = document.querySelector("#messageForm");
const traineeLoginForm = document.querySelector("#traineeLoginForm");
const traineeSpace = document.querySelector("#traineeSpace");
const traineeLogoutButton = document.querySelector("#traineeLogoutButton");
const centerForm = document.querySelector("#centerForm");
const centerPreview = document.querySelector("#centerPreview");
const centerLogoInput = document.querySelector("#centerLogoInput");
const authScreen = document.querySelector("#authScreen");
const appShell = document.querySelector("#appShell");
const profileLoginForm = document.querySelector("#profileLoginForm");
const logoutButton = document.querySelector("#logoutButton");

document.querySelectorAll(".nav-item").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

document.querySelector("#openFormButton").addEventListener("click", () => learnerDialog.showModal());
document.querySelector("#closeDialogButton").addEventListener("click", () => learnerDialog.close());
document.querySelector("#cancelFormButton").addEventListener("click", () => learnerDialog.close());
document.querySelector("#exportButton").addEventListener("click", exportCsv);
document.querySelector("#exportBackupButton").addEventListener("click", exportBackup);
document.querySelector("#importBackupButton").addEventListener("click", () => document.querySelector("#importBackupInput").click());
document.querySelector("#importBackupInput").addEventListener("change", importBackup);
document.querySelector("#resetDataButton").addEventListener("click", resetData);
logoutButton.addEventListener("click", logoutSession);
searchInput.addEventListener("input", renderLearners);
statusFilter.addEventListener("change", renderLearners);
learnerForm.addEventListener("submit", addLearner);
trainerForm.addEventListener("submit", addTrainer);
tutorForm.addEventListener("submit", addTutor);
referentialItemForm.addEventListener("submit", addReferentialItem);
noteForm.addEventListener("submit", addNote);
messageForm.addEventListener("submit", addMessage);
traineeLoginForm.addEventListener("submit", loginTrainee);
traineeLogoutButton.addEventListener("click", logoutTrainee);
profileLoginForm.addEventListener("submit", loginProfileSession);
centerForm.addEventListener("submit", saveCenter);
centerLogoInput.addEventListener("change", updateCenterLogo);

initializeApp();

async function initializeApp() {
  await loadServerState();
  restoreSession();
  selectedLearnerId = state.learners[0]?.id || null;
  selectedMessageLearnerId = state.learners[0]?.id || null;
  render();
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return createDefaultState();
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.learners)) {
      return createDefaultState();
    }

    return {
      learners: parsed.learners.map(normalizeLearner),
      trainers: normalizeTrainers(parsed.trainers || []),
      tutors: normalizeTutors(parsed.tutors || []),
      referentials: normalizeReferentials(parsed.referentials || defaultReferentials),
      center: { ...defaultCenter, ...(parsed.center || {}) }
    };
  } catch {
    return createDefaultState();
  }
}

function createDefaultState(center = defaultCenter) {
  return {
    learners: structuredClone(defaultLearners),
    trainers: structuredClone(defaultTrainers),
    tutors: structuredClone(defaultTutors),
    referentials: structuredClone(defaultReferentials),
    center
  };
}

function restoreSession() {
  try {
    const session = JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
    if (!session) {
      return;
    }

    if (session.role === "admin") {
      currentRole = "admin";
      return;
    }

    if (session.role === "trainer" && state.trainers.some((trainer) => trainer.id === session.trainerId)) {
      currentRole = "trainer";
      currentTrainerId = session.trainerId;
      return;
    }

    if (session.role === "tutor" && state.tutors.some((tutor) => tutor.id === session.tutorId)) {
      currentRole = "tutor";
      currentTutorId = session.tutorId;
      return;
    }

    if (session.role === "trainee" && state.learners.some((learner) => learner.id === session.learnerId)) {
      currentRole = "trainee";
      currentTraineeId = session.learnerId;
    }
  } catch {
    sessionStorage.removeItem(SESSION_KEY);
  }
}

function normalizeLearner(learner) {
  const modality = learner.modality || "Présentiel";
  const shouldMarkDistance = modality === "Distanciel" || modality === "Hybride";

  return {
    ...learner,
    modality,
    accessCode: learner.accessCode || generateAccessCode(learner.name),
    messages: learner.messages || [],
    modules: (learner.modules || []).map((module) => {
      if (shouldMarkDistance && module.name.startsWith("Vidéoprotection :")) {
        return { ...module, name: `Distanciel : ${module.name}` };
      }

      return module;
    })
  };
}

function normalizeTutors(tutors) {
  return tutors.map((tutor) => ({
    id: tutor.id || crypto.randomUUID(),
    learnerId: tutor.learnerId || "",
    firstName: tutor.firstName || splitTutorName(tutor.name).firstName,
    lastName: tutor.lastName || splitTutorName(tutor.name).lastName,
    position: tutor.position || "",
    company: tutor.company || "",
    diploma: tutor.diploma || "",
    phone: tutor.phone || "",
    email: tutor.email || "",
    accessCode: tutor.accessCode || generateProfileCode("TUT", `${tutor.firstName || ""} ${tutor.lastName || tutor.name || ""}`),
    notes: tutor.notes || "",
    messages: tutor.messages || []
  }));
}

function normalizeTrainers(trainers) {
  return trainers.map((trainer) => ({
    id: trainer.id || crypto.randomUUID(),
    firstName: trainer.firstName || splitTutorName(trainer.name).firstName,
    lastName: trainer.lastName || splitTutorName(trainer.name).lastName,
    specialties: normalizeSpecialties(trainer.specialties || trainer.specialty || ""),
    phone: trainer.phone || "",
    email: trainer.email || "",
    learnerIds: Array.isArray(trainer.learnerIds) ? trainer.learnerIds : [],
    notes: trainer.notes || "",
    accessCode: trainer.accessCode || generateProfileCode("FORM", `${trainer.firstName || ""} ${trainer.lastName || trainer.name || ""}`)
  }));
}

function normalizeReferentials(referentials) {
  return referentials.map((referential) => ({
    id: referential.id || crypto.randomUUID(),
    program: referential.program || "Formation non renseignée",
    modality: referential.modality || "Présentiel",
    categories: (referential.categories || []).map((category) => ({
      id: category.id || crypto.randomUUID(),
      title: category.title || "Module sans titre",
      items: (category.items || []).map((item) => ({
        id: item.id || crypto.randomUUID(),
        text: item.text || item.name || "Compétence sans titre"
      }))
    }))
  }));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  saveServerState();
}

async function loadServerState() {
  if (!isServerMode()) {
    return;
  }

  try {
    const response = await fetch("/api/state");
    if (!response.ok) {
      return;
    }

    const serverState = await response.json();
    if (!serverState || !Array.isArray(serverState.learners)) {
      await saveServerState();
      return;
    }

    state = {
      learners: serverState.learners.map(normalizeLearner),
      trainers: normalizeTrainers(serverState.trainers || []),
      tutors: normalizeTutors(serverState.tutors || []),
      referentials: normalizeReferentials(serverState.referentials || defaultReferentials),
      center: { ...defaultCenter, ...(serverState.center || {}) }
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // The static file version keeps working with localStorage only.
  }
}

async function saveServerState() {
  if (!isServerMode()) {
    return;
  }

  try {
    await fetch("/api/state", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state)
    });
  } catch {
    // LocalStorage remains the offline fallback.
  }
}

function isServerMode() {
  return location.protocol === "http:" || location.protocol === "https:";
}

function setView(viewName) {
  if (!getAllowedViews().includes(viewName)) {
    viewName = getDefaultViewForRole();
  }

  Object.entries(views).forEach(([name, view]) => view.classList.toggle("active", name === viewName));
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });
}

function render() {
  renderAuthState();
  updateNavigationAccess();
  renderOrganization();
  renderDashboard();
  renderProfiles();
  renderReferentials();
  renderLearners();
  renderTrainers();
  renderTutors();
  renderFollowup();
  renderMessages();
  renderTraineeSpace();
  renderCenter();
}

function renderAuthState() {
  const isConnected = Boolean(currentRole);
  authScreen.hidden = isConnected;
  appShell.hidden = !isConnected;

  if (!isConnected) {
    return;
  }

  if (currentRole === "trainee") {
    Object.entries(views).forEach(([name, view]) => view.classList.toggle("active", name === "trainee"));
    document.querySelectorAll(".nav-item").forEach((button) => {
      button.classList.toggle("active", button.dataset.view === "trainee");
    });
  }
}

function updateNavigationAccess() {
  const traineeMode = currentRole === "trainee" && Boolean(currentTraineeId);
  document.body.classList.toggle("trainee-mode", traineeMode);
  const allowedViews = getAllowedViews();
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.hidden = !allowedViews.includes(button.dataset.view);
  });

  document.querySelector("#exportButton").hidden = currentRole !== "admin";
  document.querySelector("#exportBackupButton").hidden = currentRole !== "admin";
  document.querySelector("#importBackupButton").hidden = currentRole !== "admin";
  document.querySelector("#resetDataButton").hidden = currentRole !== "admin";
  trainerForm.hidden = currentRole !== "admin";
  tutorForm.hidden = currentRole !== "admin";
}

function getAllowedViews() {
  if (currentRole === "admin") {
    return ["dashboard", "profiles", "referentials", "learners", "trainers", "tutors", "followup", "messages", "trainee", "center"];
  }

  if (currentRole === "trainer") {
    return ["dashboard", "trainers", "learners", "followup", "messages"];
  }

  if (currentRole === "tutor") {
    return ["dashboard", "tutors"];
  }

  if (currentRole === "trainee") {
    return ["trainee"];
  }

  return [];
}

function getDefaultViewForRole() {
  if (currentRole === "trainee") {
    return "trainee";
  }

  return "dashboard";
}

function getVisibleLearners() {
  if (currentRole === "trainer" && currentTrainerId) {
    const trainer = state.trainers.find((item) => item.id === currentTrainerId);
    const learnerIds = trainer?.learnerIds || [];
    return state.learners.filter((learner) => learnerIds.includes(learner.id));
  }

  if (currentRole === "tutor" && currentTutorId) {
    const tutor = state.tutors.find((item) => item.id === currentTutorId);
    return state.learners.filter((learner) => learner.id === tutor?.learnerId);
  }

  if (currentRole === "trainee" && currentTraineeId) {
    return state.learners.filter((learner) => learner.id === currentTraineeId);
  }

  return state.learners;
}

function renderOrganization() {
  const center = state.center || defaultCenter;
  const name = center.name || "Alliance";
  document.querySelector("#brandName").textContent = name;
  document.querySelector("#centerEyebrow").textContent = `Organisme ${name}`;

  const mark = document.querySelector("#brandLogoMark");
  mark.innerHTML = center.logo
    ? `<img src="${center.logo}" alt="">`
    : escapeHtml(name.slice(0, 1).toUpperCase() || "A");
}

function progressOf(learner) {
  if (!learner.modules.length) {
    return 0;
  }

  const done = learner.modules.filter((module) => module.done).length;
  return Math.round((done / learner.modules.length) * 100);
}

function statusClass(status) {
  return `status-${status.toLowerCase().replace("à", "a").replace(/\s+/g, "-")}`;
}

function renderDashboard() {
  const learners = getVisibleLearners();
  const active = learners.filter((learner) => learner.status === "Actif").length;
  const atRisk = learners.filter((learner) => learner.status === "À risque" || learner.attendance < 70).length;
  const averageProgress = learners.length
    ? Math.round(learners.reduce((sum, learner) => sum + progressOf(learner), 0) / learners.length)
    : 0;
  const averageAttendance = learners.length
    ? Math.round(learners.reduce((sum, learner) => sum + Number(learner.attendance), 0) / learners.length)
    : 0;

  metricGrid.innerHTML = [
    ["Apprenants", learners.length],
    ["Actifs", active],
    ["Progression moyenne", `${averageProgress}%`],
    ["Présence moyenne", `${averageAttendance}%`]
  ].map(([label, value]) => `<article class="metric"><span>${label}</span><strong>${value}</strong></article>`).join("");

  const risky = learners.filter((learner) => learner.status === "À risque" || learner.attendance < 70 || progressOf(learner) < 35);
  riskCount.textContent = risky.length;
  riskList.innerHTML = risky.length
    ? risky.map((learner) => `
      <article class="risk-item">
        <strong>${learner.name}</strong>
        <span>${learner.program} · présence ${learner.attendance}% · progression ${progressOf(learner)}%</span>
      </article>
    `).join("")
    : `<div class="empty-state">Aucune situation critique pour le moment.</div>`;

  const programs = groupPrograms(learners);
  programList.innerHTML = programs.map((program) => `
    <article class="program-item">
      <strong>${program.name}</strong>
      <span>${program.count} apprenant(s) · progression ${program.progress}%</span>
      <div class="progress-track"><div class="progress-bar" style="width: ${program.progress}%"></div></div>
    </article>
  `).join("");
}

function groupPrograms(learners) {
  const grouped = new Map();
  learners.forEach((learner) => {
    if (!grouped.has(learner.program)) {
      grouped.set(learner.program, []);
    }
    grouped.get(learner.program).push(learner);
  });

  return [...grouped.entries()].map(([name, items]) => ({
    name,
    count: items.length,
    progress: Math.round(items.reduce((sum, item) => sum + progressOf(item), 0) / items.length)
  }));
}

function renderProfiles() {
  profileGrid.innerHTML = profileAccess.map((profile) => `
    <article class="profile-card">
      <div class="profile-card-heading">
        <div>
          <h3>${escapeHtml(profile.title)}</h3>
          <p>${escapeHtml(profile.intent)}</p>
        </div>
        <span>${escapeHtml(profile.badge)}</span>
      </div>
      <div class="profile-rights">
        ${profile.canSee.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </article>
  `).join("");

  profileHomeGrid.innerHTML = profileHomePages.map((home) => {
    const items = getProfileHomeItems(home);

    return `
      <article class="profile-home-card">
        <div class="profile-card-heading">
          <div>
            <h3>${escapeHtml(home.title)}</h3>
            <p>${escapeHtml(home.subtitle)}</p>
          </div>
        </div>
        ${home.type === "metrics" ? `
          <div class="profile-home-metrics">
            ${items.map(([label, value]) => `
              <div>
                <span>${escapeHtml(label)}</span>
                <strong>${escapeHtml(value)}</strong>
              </div>
            `).join("")}
          </div>
        ` : `
          <div class="profile-home-list">
            ${items.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
        `}
      </article>
    `;
  }).join("");
}

function renderReferentials() {
  const referentials = state.referentials || [];
  const programs = [...new Set([
    ...trainingPrograms,
    ...referentials.map((referential) => referential.program),
    ...state.learners.map((learner) => learner.program)
  ].filter(Boolean))];

  referentialProgram.innerHTML = programs
    .map((program) => `<option value="${escapeHtml(program)}">${escapeHtml(program)}</option>`)
    .join("");

  const itemCount = referentials.reduce((sum, referential) => (
    sum + referential.categories.reduce((categorySum, category) => categorySum + category.items.length, 0)
  ), 0);
  referentialCount.textContent = itemCount;

  referentialList.innerHTML = referentials.length
    ? referentials.map((referential) => `
      <article class="referential-card">
        <div class="referential-card-top">
          <div>
            <strong>${escapeHtml(referential.program)}</strong>
            <span>${escapeHtml(referential.modality)} · ${referential.categories.length} sous-menu(s)</span>
          </div>
          <button class="danger-link" type="button" data-delete-referential="${referential.id}">Supprimer</button>
        </div>
        <div class="referential-categories">
          ${referential.categories.map((category) => `
            <details class="referential-category" open>
              <summary>
                <span>${escapeHtml(category.title)}</span>
                <small>${category.items.length} élément(s)</small>
              </summary>
              <div class="referential-items">
                ${category.items.map((item) => `
                  <div class="referential-item">
                    <span>${escapeHtml(item.text)}</span>
                    <button class="danger-link" type="button" data-delete-referential-item="${referential.id}|${category.id}|${item.id}">Retirer</button>
                  </div>
                `).join("") || `<div class="empty-state">Aucune compétence dans ce sous-menu.</div>`}
              </div>
            </details>
          `).join("")}
        </div>
      </article>
    `).join("")
    : `<div class="empty-state">Aucun référentiel enregistré pour le moment.</div>`;

  referentialList.querySelectorAll("[data-delete-referential]").forEach((button) => {
    button.addEventListener("click", () => deleteReferential(button.dataset.deleteReferential));
  });

  referentialList.querySelectorAll("[data-delete-referential-item]").forEach((button) => {
    button.addEventListener("click", () => {
      const [referentialId, categoryId, itemId] = button.dataset.deleteReferentialItem.split("|");
      deleteReferentialItem(referentialId, categoryId, itemId);
    });
  });
}

function getProfileHomeItems(home) {
  if (home.type === "metrics") {
    return getAllianceHomeMetrics();
  }

  return home.items;
}

function getAllianceHomeMetrics() {
  const learners = state.learners || [];
  const tutors = state.tutors || [];
  const activeLearners = learners.filter((learner) => learner.status === "Actif").length;
  const attendanceAlerts = learners.filter((learner) => Number(learner.attendance) < 70 || learner.status === "À risque").length;
  const incompleteFiles = learners.filter((learner) => !learner.program || !learner.coach || !learner.startDate || !tutors.some((tutor) => tutor.learnerId === learner.id)).length;
  const companyAlerts = tutors.filter((tutor) => /alerte|difficult|absence|retard|incident/i.test(`${tutor.notes || ""} ${(tutor.messages || []).map((message) => message.text).join(" ")}`)).length;
  const tutorVisitsToPlan = learners.filter((learner) => !tutors.some((tutor) => tutor.learnerId === learner.id)).length;

  return [
    ["Apprentis actifs", activeLearners],
    ["Dossiers incomplets", incompleteFiles],
    ["Alertes assiduité", attendanceAlerts],
    ["Alertes entreprise", companyAlerts],
    ["Examens à venir", 0],
    ["Visites tuteur à planifier", tutorVisitsToPlan]
  ];
}

function renderTrainers() {
  const trainers = currentRole === "trainer" && currentTrainerId
    ? (state.trainers || []).filter((trainer) => trainer.id === currentTrainerId)
    : state.trainers || [];
  trainerLearners.innerHTML = state.learners.length
    ? state.learners.map((learner) => `<option value="${learner.id}">${escapeHtml(learner.name)} - ${escapeHtml(learner.program)}</option>`).join("")
    : `<option value="">Ajoutez d'abord un stagiaire</option>`;
  trainerLearners.disabled = !state.learners.length;
  trainerForm.querySelector("button[type='submit']").disabled = !state.learners.length;
  trainerCount.textContent = trainers.length;

  trainerList.innerHTML = trainers.length
    ? trainers.map((trainer) => {
      const learners = trainer.learnerIds
        .map((id) => state.learners.find((learner) => learner.id === id))
        .filter(Boolean);
      return `
        <article class="trainer-card">
          <div class="trainer-card-top">
            <div>
              <strong>${escapeHtml(personFullName(trainer) || "Formateur sans nom")}</strong>
              <span>${trainer.specialties?.length ? `${trainer.specialties.length} spécialité(s)` : "Spécialité non renseignée"}</span>
            </div>
            ${currentRole === "admin" ? `<button class="danger-link" type="button" data-delete-trainer="${trainer.id}">Supprimer</button>` : ""}
          </div>
          <div class="trainer-specialties">
            ${trainer.specialties?.length
              ? trainer.specialties.map((specialty) => `<span>${escapeHtml(specialty)}</span>`).join("")
              : `<span>Spécialité non renseignée</span>`}
          </div>
          <div class="trainer-info-grid">
            <div><span>Code accès formateur</span><strong>${escapeHtml(trainer.accessCode)}</strong></div>
            <div><span>Téléphone</span><strong>${escapeHtml(trainer.phone || "Non renseigné")}</strong></div>
            <div><span>E-mail</span><strong>${escapeHtml(trainer.email || "Non renseigné")}</strong></div>
            <div><span>Stagiaires suivis</span><strong>${learners.length}</strong></div>
          </div>
          <div class="trainer-learners">
            ${learners.length
              ? learners.map((learner) => `<span>${escapeHtml(learner.name)} · ${escapeHtml(learner.program)}</span>`).join("")
              : `<span>Aucun stagiaire rattaché</span>`}
          </div>
          <p>${escapeHtml(trainer.notes || "Aucune note pédagogique.")}</p>
        </article>
      `;
    }).join("")
    : `<div class="empty-state">Aucun formateur enregistré pour le moment.</div>`;

  trainerList.querySelectorAll("[data-delete-trainer]").forEach((button) => {
    button.addEventListener("click", () => deleteTrainer(button.dataset.deleteTrainer));
  });
}

function renderLearners() {
  const query = searchInput.value.trim().toLowerCase();
  const status = statusFilter.value;
  const availableLearners = getVisibleLearners();
  const learners = availableLearners.filter((learner) => {
    const searchable = `${learner.name} ${learner.program} ${learner.coach}`.toLowerCase();
    return searchable.includes(query) && (status === "all" || learner.status === status);
  });

  if (!learners.some((learner) => learner.id === selectedLearnerId)) {
    selectedLearnerId = learners[0]?.id || null;
  }

  learnerList.innerHTML = learners.length
    ? learners.map((learner) => `
      <button class="learner-card ${learner.id === selectedLearnerId ? "active" : ""}" type="button" data-id="${learner.id}">
        <div class="learner-card-top">
          <div>
            <strong>${learner.name}</strong>
            <div class="learner-meta">${learner.program} · ${learner.modality || "Présentiel"} · ${learner.coach}</div>
          </div>
          <span class="status-pill ${statusClass(learner.status)}">${learner.status}</span>
        </div>
        <div class="progress-track"><div class="progress-bar" style="width: ${progressOf(learner)}%"></div></div>
        <div class="learner-meta">${progressOf(learner)}% validé · présence ${learner.attendance}%</div>
      </button>
    `).join("")
    : `<div class="empty-state">Aucun apprenant ne correspond à cette recherche.</div>`;

  learnerList.querySelectorAll(".learner-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectedLearnerId = card.dataset.id;
      renderLearners();
    });
  });

  renderDetail();
}

function renderDetail() {
  const learner = state.learners.find((item) => item.id === selectedLearnerId);
  const template = getProgramTemplate(learner?.program || "", learner?.modality || "Présentiel");
  const tutor = state.tutors?.find((item) => item.learnerId === learner?.id);
  if (!learner) {
    detailPanel.innerHTML = `<div class="empty-state">Sélectionnez une fiche pour voir le détail.</div>`;
    return;
  }

  detailPanel.innerHTML = `
    <div class="detail-title">
      <div>
        <h3>${learner.name}</h3>
        <div class="learner-meta">${learner.program}</div>
      </div>
      <span class="status-pill ${statusClass(learner.status)}">${learner.status}</span>
    </div>
    <div class="detail-meta">
      <div><span>Référent</span><strong>${learner.coach}</strong></div>
      <div><span>Modalité</span><strong>${learner.modality || "Présentiel"}</strong></div>
      <div><span>Entrée</span><strong>${formatDate(learner.startDate)}</strong></div>
      <div><span>Présence</span><strong>${learner.attendance}%</strong></div>
      <div><span>Progression</span><strong>${progressOf(learner)}%</strong></div>
      <div><span>Code espace stagiaire</span><strong>${escapeHtml(learner.accessCode || generateAccessCode(learner.name))}</strong></div>
    </div>
    <div class="linked-tutor">
      <span>Tuteur entreprise</span>
      <strong>${escapeHtml(tutor ? tutorFullName(tutor) : "Non renseigné")}</strong>
      <p>${escapeHtml(tutor ? `${tutor.position || "Poste non renseigné"} · ${tutor.company || "Entreprise non renseignée"} · ${tutor.phone || "Téléphone non renseigné"}` : "Ajoutez un tuteur depuis l'onglet Tuteurs.")}</p>
    </div>
    <label class="modality-editor">
      <span>Changer la modalité</span>
      <select id="detailModalitySelect">
        ${["Présentiel", "Distanciel", "Hybride"].map((modality) => `
          <option value="${modality}" ${modality === (learner.modality || "Présentiel") ? "selected" : ""}>${modality}</option>
        `).join("")}
      </select>
    </label>
    <h3>Modules</h3>
    ${template ? `
      <p class="helper-text">La modalité peut être changée sans modifier les compétences. Appliquez le référentiel seulement si vous voulez remplacer la liste actuelle.</p>
      <button class="ghost-button template-button" id="applyTemplateButton" type="button">Appliquer le référentiel ${template.label} - ${template.modality}</button>
    ` : ""}
    <div class="module-list">
      ${learner.modules.map((module, index) => `
        <div class="module-item">
          <label>
            <input type="checkbox" data-module="${index}" ${module.done ? "checked" : ""}>
            ${module.name}
          </label>
          <span>${module.done ? "Validé" : "À faire"}</span>
        </div>
      `).join("")}
    </div>
    <h3>Dernières notes</h3>
    <div class="timeline">
      ${learner.notes.slice(-3).reverse().map(noteTemplate).join("") || `<div class="empty-state">Aucune note enregistrée.</div>`}
    </div>
    ${currentRole === "admin" ? `<button class="danger-button" id="deleteLearnerButton" type="button">Supprimer ce stagiaire</button>` : ""}
  `;

  detailPanel.querySelectorAll("[data-module]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      learner.modules[Number(checkbox.dataset.module)].done = checkbox.checked;
      saveState();
      render();
    });
  });

  const applyTemplateButton = document.querySelector("#applyTemplateButton");
  if (applyTemplateButton && template) {
    applyTemplateButton.addEventListener("click", () => applyTemplate(learner.id, template));
  }

  document.querySelector("#detailModalitySelect").addEventListener("change", (event) => {
    updateLearnerModality(learner.id, event.target.value);
  });

  const deleteLearnerButton = document.querySelector("#deleteLearnerButton");
  if (deleteLearnerButton) {
    deleteLearnerButton.addEventListener("click", () => deleteLearner(learner.id));
  }
}

function renderTutors() {
  const tutors = currentRole === "tutor" && currentTutorId
    ? (state.tutors || []).filter((tutor) => tutor.id === currentTutorId)
    : state.tutors || [];
  tutorLearner.innerHTML = state.learners.length
    ? state.learners.map((learner) => `<option value="${learner.id}">${escapeHtml(learner.name)}</option>`).join("")
    : `<option value="">Ajoutez d'abord un stagiaire</option>`;
  tutorLearner.disabled = !state.learners.length;
  tutorForm.querySelector("button[type='submit']").disabled = !state.learners.length;
  tutorCount.textContent = tutors.length;

  tutorList.innerHTML = tutors.length
    ? tutors.map((tutor) => {
      const learner = state.learners.find((item) => item.id === tutor.learnerId);
      const messages = tutor.messages || [];
      return `
        <article class="tutor-card">
          <div class="tutor-card-top">
            <div>
              <strong>${escapeHtml(tutorFullName(tutor) || "Tuteur sans nom")}</strong>
              <span>${escapeHtml(tutor.position || "Poste non renseigné")} · ${escapeHtml(tutor.company || "Entreprise non renseignée")}</span>
            </div>
            ${currentRole === "admin" ? `<button class="danger-link" type="button" data-delete-tutor="${tutor.id}">Supprimer</button>` : ""}
          </div>
          <div class="tutor-info-grid">
            <div><span>Stagiaire</span><strong>${escapeHtml(learner?.name || "Non rattaché")}</strong></div>
            <div><span>Diplôme suivi</span><strong>${escapeHtml(tutor.diploma || learner?.program || "Non renseigné")}</strong></div>
            <div><span>Code accès tuteur</span><strong>${escapeHtml(tutor.accessCode || "Non renseigné")}</strong></div>
            <div><span>Téléphone</span><strong>${escapeHtml(tutor.phone || "Non renseigné")}</strong></div>
            <div><span>E-mail</span><strong>${escapeHtml(tutor.email || "Non renseigné")}</strong></div>
          </div>
          <p>${escapeHtml(tutor.notes || "Aucune note de suivi.")}</p>
          <div class="tutor-message-thread">
            ${messages.length
              ? messages.map((message) => `
                <article class="tutor-message ${message.sender === "Tuteur" ? "from-tutor" : "from-center"}">
                  <small>${escapeHtml(message.sender)} · ${formatDateTime(message.date)}</small>
                  <p>${escapeHtml(message.text)}</p>
                </article>
              `).join("")
              : `<div class="empty-state">Aucun message avec ce tuteur.</div>`}
          </div>
          <form class="tutor-message-form" data-tutor-message-form="${tutor.id}">
            <label>
              <span>Expéditeur</span>
              <select name="sender">
                ${currentRole === "tutor"
                  ? `<option value="Tuteur">Tuteur</option>`
                  : `<option value="Centre">Centre</option><option value="Tuteur">Tuteur</option>`}
              </select>
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" rows="2" placeholder="Écrire au tuteur..." required></textarea>
            </label>
            <button class="primary-button" type="submit">Envoyer</button>
          </form>
        </article>
      `;
    }).join("")
    : `<div class="empty-state">Aucun tuteur enregistré pour le moment.</div>`;

  tutorList.querySelectorAll("[data-delete-tutor]").forEach((button) => {
    button.addEventListener("click", () => deleteTutor(button.dataset.deleteTutor));
  });

  tutorList.querySelectorAll("[data-tutor-message-form]").forEach((form) => {
    form.addEventListener("submit", addTutorMessage);
  });
}

function renderFollowup() {
  const learners = getVisibleLearners();
  noteLearner.innerHTML = learners.map((learner) => `
    <option value="${learner.id}">${learner.name}</option>
  `).join("");

  const notes = learners.flatMap((learner) => learner.notes.map((note) => ({ ...note, learnerName: learner.name })));
  notes.sort((a, b) => b.date.localeCompare(a.date));

  timeline.innerHTML = notes.length
    ? notes.map((note) => noteTemplate(note, true)).join("")
    : `<div class="empty-state">Le journal de suivi est vide.</div>`;
}

function renderMessages() {
  const learners = getVisibleLearners();
  if (!learners.some((learner) => learner.id === selectedMessageLearnerId)) {
    selectedMessageLearnerId = learners[0]?.id || null;
  }

  messageLearnerList.innerHTML = learners.length
    ? learners.map((learner) => `
      <button class="message-learner ${learner.id === selectedMessageLearnerId ? "active" : ""}" type="button" data-id="${learner.id}">
        <strong>${escapeHtml(learner.name)}</strong>
        <span>${escapeHtml(learner.program)} · ${(learner.messages || []).length} message(s)</span>
      </button>
    `).join("")
    : `<div class="empty-state">Aucun stagiaire disponible.</div>`;

  messageLearnerList.querySelectorAll(".message-learner").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMessageLearnerId = button.dataset.id;
      renderMessages();
    });
  });

  const learner = learners.find((item) => item.id === selectedMessageLearnerId);
  if (!learner) {
    chatHeading.innerHTML = `<h3>Aucune conversation</h3>`;
    chatThread.innerHTML = `<div class="empty-state">Ajoutez un stagiaire pour démarrer une conversation.</div>`;
    messageForm.hidden = true;
    return;
  }

  messageForm.hidden = false;
  chatHeading.innerHTML = `
    <div>
      <h3>${escapeHtml(learner.name)}</h3>
      <span>${escapeHtml(learner.program)} · ${escapeHtml(learner.modality || "Présentiel")}</span>
    </div>
  `;

  const messages = learner.messages || [];
  chatThread.innerHTML = messages.length
    ? messages.map((message) => `
      <article class="chat-message ${message.sender === "Stagiaire" ? "from-learner" : message.sender === "Christophe" ? "from-ai" : "from-center"}">
        <small>${escapeHtml(message.sender)} · ${formatDateTime(message.date)}</small>
        <p>${escapeHtml(message.text)}</p>
      </article>
    `).join("")
    : `<div class="empty-state">Aucun message pour le moment.</div>`;
  chatThread.scrollTop = chatThread.scrollHeight;
}

function renderTraineeSpace() {
  const learner = state.learners.find((item) => item.id === currentTraineeId);
  traineeLoginForm.hidden = Boolean(learner);
  traineeSpace.hidden = !learner;
  traineeLogoutButton.hidden = !learner;

  if (!learner) {
    traineeSpace.innerHTML = "";
    return;
  }

  const messages = learner.messages || [];
  traineeSpace.innerHTML = `
    <div class="trainee-header">
      <div>
        <p class="eyebrow">Bienvenue</p>
        <h3>${escapeHtml(learner.name)}</h3>
        <span>${escapeHtml(learner.program)} · ${escapeHtml(learner.modality || "Présentiel")}</span>
      </div>
      <strong>${progressOf(learner)}%</strong>
    </div>

    <div class="progress-track"><div class="progress-bar" style="width: ${progressOf(learner)}%"></div></div>

    <div class="trainee-grid">
      <section>
        <h3>Mes compétences</h3>
        <div class="module-list">
          ${learner.modules.map((module) => `
            <div class="module-item">
              <span>${escapeHtml(module.name)}</span>
              <strong>${module.done ? "Validé" : "À faire"}</strong>
            </div>
          `).join("")}
        </div>
      </section>

      <section>
        <h3>Messages avec le centre</h3>
        <div class="chat-thread trainee-chat-thread">
          ${messages.length
            ? messages.map((message) => `
              <article class="chat-message ${message.sender === "Stagiaire" ? "from-learner" : message.sender === "Christophe" ? "from-ai" : "from-center"}">
                <small>${escapeHtml(message.sender)} · ${formatDateTime(message.date)}</small>
                <p>${escapeHtml(message.text)}</p>
              </article>
            `).join("")
            : `<div class="empty-state">Aucun message pour le moment.</div>`}
        </div>
        <form class="trainee-message-form" id="traineeMessageForm">
          <label>
            <span>Message au centre</span>
            <textarea id="traineeMessageText" rows="3" placeholder="Écrire au centre..." required></textarea>
          </label>
          <button class="primary-button" type="submit">Envoyer au centre</button>
        </form>
      </section>
    </div>
  `;

  document.querySelector("#traineeMessageForm").addEventListener("submit", sendTraineeMessage);
}

function renderCenter() {
  const center = state.center || defaultCenter;
  document.querySelector("#centerNameInput").value = center.name || "";
  document.querySelector("#centerAddressInput").value = center.address || "";
  document.querySelector("#centerPhoneInput").value = center.phone || "";
  document.querySelector("#centerEmailInput").value = center.email || "";
  document.querySelector("#adminReferentInput").value = center.adminReferent || "";
  document.querySelector("#pedagogicalReferentInput").value = center.pedagogicalReferent || "";

  centerPreview.innerHTML = `
    <div class="center-card">
      <div class="center-logo">
        ${center.logo ? `<img src="${center.logo}" alt="Logo ${escapeHtml(center.name || "du centre")}">` : escapeHtml((center.name || "A").slice(0, 1).toUpperCase())}
      </div>
      <div>
        <p class="eyebrow">Aperçu</p>
        <h3>${escapeHtml(center.name || "Nom du centre")}</h3>
      </div>
      <div class="center-info-grid">
        <div><span>Adresse</span><strong>${escapeHtml(center.address || "Non renseignée")}</strong></div>
        <div><span>Téléphone</span><strong>${escapeHtml(center.phone || "Non renseigné")}</strong></div>
        <div><span>E-mail</span><strong>${escapeHtml(center.email || "Non renseigné")}</strong></div>
      </div>
      <div class="referent-grid">
        <div class="referent-box"><span>Référent administratif</span><strong>${escapeHtml(center.adminReferent || "Non renseigné")}</strong></div>
        <div class="referent-box"><span>Référent pédagogique</span><strong>${escapeHtml(center.pedagogicalReferent || "Non renseigné")}</strong></div>
      </div>
    </div>
  `;
}

function noteTemplate(note, showLearner = false) {
  return `
    <article class="timeline-item">
      <small>${formatDate(note.date)} · ${note.type}${showLearner ? ` · ${note.learnerName}` : ""}</small>
      <strong>${note.text}</strong>
    </article>
  `;
}

function addLearner(event) {
  event.preventDefault();

  const name = document.querySelector("#learnerName").value.trim();
  const program = document.querySelector("#learnerProgram").value.trim();
  const coach = document.querySelector("#learnerCoach").value.trim();
  const modality = document.querySelector("#learnerModality").value;
  const startDate = document.querySelector("#learnerStart").value;
  const status = document.querySelector("#learnerStatus").value;
  const attendance = Number(document.querySelector("#learnerAttendance").value);

  const learner = {
    id: crypto.randomUUID(),
    name,
    program,
    coach,
    modality,
    startDate,
    status,
    attendance,
    accessCode: generateAccessCode(name),
    modules: modulesForProgram(program, modality),
    notes: [],
    messages: []
  };

  state.learners.unshift(learner);
  selectedLearnerId = learner.id;
  saveState();
  learnerForm.reset();
  learnerDialog.close();
  setView("learners");
  render();
}

function addTrainer(event) {
  event.preventDefault();
  const learnerIds = [...trainerLearners.selectedOptions].map((option) => option.value).filter(Boolean);
  const firstName = document.querySelector("#trainerFirstName").value.trim();
  const lastName = document.querySelector("#trainerLastName").value.trim();

  const trainer = {
    id: crypto.randomUUID(),
    firstName,
    lastName,
    specialties: [...document.querySelectorAll('input[name="trainerSpecialties"]:checked')].map((input) => input.value),
    phone: document.querySelector("#trainerPhone").value.trim(),
    email: document.querySelector("#trainerEmail").value.trim(),
    learnerIds,
    notes: document.querySelector("#trainerNotes").value.trim(),
    accessCode: generateProfileCode("FORM", `${firstName} ${lastName}`)
  };

  state.trainers = state.trainers || [];
  state.trainers.unshift(trainer);
  saveState();
  trainerForm.reset();
  setView("trainers");
  render();
}

function addTutor(event) {
  event.preventDefault();
  const learnerId = tutorLearner.value;
  const learner = state.learners.find((item) => item.id === learnerId);
  if (!learnerId) {
    return;
  }

  const tutor = {
    id: crypto.randomUUID(),
    learnerId,
    firstName: document.querySelector("#tutorFirstName").value.trim(),
    lastName: document.querySelector("#tutorLastName").value.trim(),
    position: document.querySelector("#tutorPosition").value.trim(),
    company: document.querySelector("#tutorCompany").value.trim(),
    diploma: document.querySelector("#tutorDiploma").value.trim() || learner?.program || "",
    phone: document.querySelector("#tutorPhone").value.trim(),
    email: document.querySelector("#tutorEmail").value.trim(),
    accessCode: generateProfileCode("TUT", `${document.querySelector("#tutorFirstName").value} ${document.querySelector("#tutorLastName").value}`),
    notes: document.querySelector("#tutorNotes").value.trim(),
    messages: []
  };

  state.tutors = state.tutors || [];
  state.tutors.unshift(tutor);
  selectedLearnerId = learnerId;
  saveState();
  tutorForm.reset();
  setView("tutors");
  render();
}

function addReferentialItem(event) {
  event.preventDefault();
  const program = referentialProgram.value;
  const modality = document.querySelector("#referentialModality").value;
  const categoryTitle = document.querySelector("#referentialCategory").value.trim();
  const text = document.querySelector("#referentialItemText").value.trim();
  if (!program || !categoryTitle || !text) {
    return;
  }

  state.referentials = state.referentials || [];
  let referential = state.referentials.find((item) => item.program === program && item.modality === modality);
  if (!referential) {
    referential = {
      id: crypto.randomUUID(),
      program,
      modality,
      categories: []
    };
    state.referentials.push(referential);
  }

  let category = referential.categories.find((item) => item.title.toLowerCase() === categoryTitle.toLowerCase());
  if (!category) {
    category = {
      id: crypto.randomUUID(),
      title: categoryTitle,
      items: []
    };
    referential.categories.push(category);
  }

  category.items.push({
    id: crypto.randomUUID(),
    text
  });

  document.querySelector("#referentialItemText").value = "";
  saveState();
  renderReferentials();
}

function addTutorMessage(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const tutor = (state.tutors || []).find((item) => item.id === form.dataset.tutorMessageForm);
  const text = new FormData(form).get("message")?.toString().trim();
  const sender = new FormData(form).get("sender")?.toString() || "Centre";
  if (!tutor || !text) {
    return;
  }

  tutor.messages = tutor.messages || [];
  tutor.messages.push({
    id: crypto.randomUUID(),
    sender,
    text,
    date: new Date().toISOString()
  });

  saveState();
  renderTutors();
}

function addNote(event) {
  event.preventDefault();
  const learner = state.learners.find((item) => item.id === noteLearner.value);
  if (!learner) {
    return;
  }

  learner.notes.push({
    date: new Date().toISOString().slice(0, 10),
    type: document.querySelector("#noteType").value,
    text: document.querySelector("#noteText").value.trim()
  });

  document.querySelector("#noteText").value = "";
  selectedLearnerId = learner.id;
  saveState();
  render();
}

function addMessage(event) {
  event.preventDefault();
  const learner = state.learners.find((item) => item.id === selectedMessageLearnerId);
  const text = document.querySelector("#messageText").value.trim();
  if (!learner || !text) {
    return;
  }

  learner.messages = learner.messages || [];
  learner.messages.push({
    id: crypto.randomUUID(),
    sender: document.querySelector("#messageSender").value,
    text,
    date: new Date().toISOString()
  });

  if (document.querySelector("#messageSender").value === "Stagiaire") {
    addChristopheReply(learner, text).then(() => {
      saveState();
      renderMessages();
    });
  }

  document.querySelector("#messageText").value = "";
  saveState();
  renderMessages();
}

async function loginProfileSession(event) {
  event.preventDefault();
  const role = document.querySelector("#profileLoginRole").value;
  const code = normalizeAccessCode(document.querySelector("#profileAccessCode").value);
  const helper = document.querySelector("#profileLoginHelp");
  helper.textContent = "Vérification du code...";
  await loadServerState();
  const access = findAccessByCode(code, role) || findAccessByCode(code);

  if (!access) {
    helper.textContent = "Code introuvable. Vérifiez le profil choisi ou le code remis par Alliance.";
    return;
  }

  applyLoginAccess(access, helper);
}

function findAccessByCode(code, preferredRole = "") {
  if ((!preferredRole || preferredRole === "admin") && code === normalizeAccessCode(ADMIN_CODE)) {
    return { role: "admin" };
  }

  if (!preferredRole || preferredRole === "trainer") {
    const trainer = (state.trainers || []).find((item) => normalizeAccessCode(item.accessCode) === code);
    if (trainer) {
      return { role: "trainer", trainerId: trainer.id };
    }
  }

  if (!preferredRole || preferredRole === "tutor") {
    const tutor = (state.tutors || []).find((item) => normalizeAccessCode(item.accessCode) === code);
    if (tutor) {
      return { role: "tutor", tutorId: tutor.id };
    }
  }

  if (!preferredRole || preferredRole === "trainee") {
    const learner = state.learners.find((item) => normalizeAccessCode(item.accessCode || generateAccessCode(item.name)) === code);
    if (learner) {
      return { role: "trainee", learnerId: learner.id };
    }
  }

  return null;
}

function applyLoginAccess(access, helper) {
  if (access.role === "admin") {
    currentRole = "admin";
    currentTraineeId = null;
    currentTrainerId = null;
    currentTutorId = null;
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ role: "admin" }));
    completeProfileLogin("dashboard", helper);
    return;
  }

  if (access.role === "trainer") {
    currentRole = "trainer";
    currentTrainerId = access.trainerId;
    currentTraineeId = null;
    currentTutorId = null;
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ role: "trainer", trainerId: access.trainerId }));
    completeProfileLogin("dashboard", helper);
    return;
  }

  if (access.role === "tutor") {
    currentRole = "tutor";
    currentTutorId = access.tutorId;
    currentTraineeId = null;
    currentTrainerId = null;
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ role: "tutor", tutorId: access.tutorId }));
    completeProfileLogin("dashboard", helper);
    return;
  }

  currentRole = "trainee";
  currentTraineeId = access.learnerId;
  currentTrainerId = null;
  currentTutorId = null;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ role: "trainee", learnerId: access.learnerId }));
  completeProfileLogin("trainee", helper);
}

function completeProfileLogin(viewName, helper) {
  document.querySelector("#profileAccessCode").value = "";
  helper.textContent = "Sélectionnez votre profil puis renseignez le code remis par Alliance.";
  setView(viewName);
  render();
}

function logoutSession() {
  currentRole = null;
  currentTraineeId = null;
  currentTrainerId = null;
  currentTutorId = null;
  sessionStorage.removeItem(SESSION_KEY);
  document.body.classList.remove("trainee-mode");
  render();
}

function loginTrainee(event) {
  event.preventDefault();
  const code = normalizeAccessCode(document.querySelector("#traineeAccessCode").value);
  const learner = state.learners.find((item) => normalizeAccessCode(item.accessCode || generateAccessCode(item.name)) === code);
  const helper = document.querySelector("#traineeLoginHelp");

  if (!learner) {
    helper.textContent = "Code introuvable. Vérifiez le code indiqué dans la fiche stagiaire.";
    return;
  }

  currentTraineeId = learner.id;
  currentRole = "trainee";
  currentTrainerId = null;
  currentTutorId = null;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ role: "trainee", learnerId: learner.id }));
  document.querySelector("#traineeAccessCode").value = "";
  helper.textContent = "Le code d'accès est visible dans la fiche du stagiaire côté centre.";
  setView("trainee");
  updateNavigationAccess();
  renderTraineeSpace();
}

function logoutTrainee() {
  logoutSession();
}

function sendTraineeMessage(event) {
  event.preventDefault();
  const learner = state.learners.find((item) => item.id === currentTraineeId);
  const text = document.querySelector("#traineeMessageText").value.trim();
  if (!learner || !text) {
    return;
  }

  learner.messages = learner.messages || [];
  learner.messages.push({
    id: crypto.randomUUID(),
    sender: "Stagiaire",
    text,
    date: new Date().toISOString()
  });
  addChristopheReply(learner, text).then(() => {
    saveState();
    renderMessages();
    renderTraineeSpace();
  });

  saveState();
  renderMessages();
  renderTraineeSpace();
}

async function addChristopheReply(learner, messageText) {
  const text = await getChristopheReply(learner, messageText);
  learner.messages.push({
    id: crypto.randomUUID(),
    sender: "Christophe",
    text,
    date: new Date(Date.now() + 1000).toISOString()
  });
}

async function getChristopheReply(learner, messageText) {
  if (!isServerMode()) {
    return buildChristopheReply(learner, messageText);
  }

  try {
    const response = await fetch("/api/christophe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        learner: {
          name: learner.name,
          program: learner.program,
          modality: learner.modality,
          progress: progressOf(learner),
          attendance: learner.attendance,
          coach: learner.coach,
          modules: learner.modules || [],
          center: state.center || defaultCenter
        },
        message: messageText
      })
    });

    if (!response.ok) {
      return buildChristopheReply(learner, messageText);
    }

    const data = await response.json();
    return data.reply || buildChristopheReply(learner, messageText);
  } catch {
    return buildChristopheReply(learner, messageText);
  }
}

function buildChristopheReply(learner, messageText) {
  const message = messageText.toLowerCase();
  const progress = progressOf(learner);
  const modules = learner.modules || [];
  const pendingModules = modules.filter((module) => !module.done);
  const doneModules = modules.filter((module) => module.done);
  const nextModule = pendingModules[0];
  const center = state.center || defaultCenter;
  const pedagogicalReferent = center.pedagogicalReferent || learner.coach || "votre référent pédagogique";
  const lessonAnswer = getOvpLessonAnswer(learner, message);

  if (lessonAnswer) {
    return lessonAnswer;
  }

  if (message.includes("absence") || message.includes("absent") || message.includes("retard")) {
    return `Bonjour ${learner.name}. J'ai bien noté votre message. Votre taux de présence indiqué est de ${learner.attendance || 0}%. Si vous avez une absence ou un retard, envoyez la date et le motif au centre pour que ${pedagogicalReferent} puisse mettre votre suivi à jour.`;
  }

  if (message.includes("progression") || message.includes("avance") || message.includes("valid")) {
    if (nextModule) {
      return `Bonjour ${learner.name}. Votre progression actuelle est de ${progress}%. Vous avez ${doneModules.length} compétence(s) validée(s) sur ${modules.length}. La prochaine étape à travailler est : "${nextModule.name}". Quand vous pensez l'avoir terminée, signalez-le au centre pour validation.`;
    }

    return `Bonjour ${learner.name}. Votre progression est à ${progress}%. Toutes les compétences visibles semblent validées. Demandez au centre la confirmation finale de votre parcours.`;
  }

  if (message.includes("code") || message.includes("connexion") || message.includes("compte")) {
    return `Bonjour ${learner.name}. Votre accès se fait avec le code indiqué dans votre fiche stagiaire. Si ce code ne fonctionne pas, contactez le référent administratif${center.adminReferent ? ` : ${center.adminReferent}` : ""}.`;
  }

  if (message.includes("difficile") || message.includes("difficulté") || message.includes("comprendre") || message.includes("aide") || message.includes("bloque")) {
    const target = findRelevantModule(modules, message) || nextModule;
    if (target) {
      return `Bonjour ${learner.name}. Pour votre difficulté, concentrez-vous d'abord sur ce module : "${target.name}". Relisez les consignes, notez ce qui bloque en une phrase, puis envoyez cet élément au centre. Je vous conseille de demander un point court avec ${pedagogicalReferent}.`;
    }

    return `Bonjour ${learner.name}. Dites-moi sur quel module vous bloquez, par exemple "règles républicaines", "sites sensibles", "R82" ou "questionnaire OVP", et je vous orienterai plus précisément.`;
  }

  if (message.includes("stage") || message.includes("entreprise")) {
    const stageModule = modules.find((module) => module.name.toLowerCase().includes("stage") || module.name.toLowerCase().includes("immersion"));
    return `Bonjour ${learner.name}. Pour le stage en entreprise, vérifiez les dates, la convention et le contact entreprise avec le centre.${stageModule ? ` Dans votre suivi, l'étape concernée est : "${stageModule.name}".` : ""}`;
  }

  if (message.includes("r82") || message.includes("installation")) {
    return `Bonjour ${learner.name}. Pour la partie R82, l'objectif est de comprendre les règles d'installation liées à la vidéosurveillance. Commencez par identifier les lieux filmés, les obligations d'information du public et les limites de conservation des images.`;
  }

  if (message.includes("site sensible") || message.includes("sites sensibles") || message.includes("importance vitale")) {
    return `Bonjour ${learner.name}. Pour les sites sensibles et d'importance vitale, retenez surtout qu'ils demandent une vigilance renforcée, une application stricte des consignes et une transmission rapide des situations anormales aux interlocuteurs autorisés.`;
  }

  if (message.includes("républicain") || message.includes("republicain")) {
    return `Bonjour ${learner.name}. Les règles républicaines concernent le respect des principes de la République, la neutralité, l'égalité de traitement, le respect des personnes et l'application du cadre légal dans votre mission.`;
  }

  if (nextModule) {
    return `Bonjour ${learner.name}, c'est Christophe. J'ai bien reçu votre message. Dans votre parcours ${learner.program}, votre prochaine compétence à travailler est : "${nextModule.name}". Si votre question concerne ce module, précisez-moi ce qui bloque et je vous guiderai.`;
  }

  return `Bonjour ${learner.name}, c'est Christophe. J'ai bien reçu votre message. Votre progression est de ${progress}%. Posez-moi une question sur un module précis pour que je puisse vous répondre plus directement.`;
}

function findRelevantModule(modules, message) {
  const keywords = message
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 3);

  return modules.find((module) => {
    const normalized = module.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return keywords.some((keyword) => normalized.includes(keyword));
  });
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
    return `Bonjour ${name}. Les règles républicaines, dans votre formation, renvoient aux principes à respecter dans une mission de sécurité : égalité de traitement, neutralité, respect de la loi, respect des libertés individuelles, dignité des personnes et non-discrimination. En vidéoprotection, cela signifie observer une situation sans jugement personnel et agir uniquement dans le cadre légal et les consignes professionnelles.`;
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

function saveCenter(event) {
  event.preventDefault();

  state.center = {
    ...(state.center || defaultCenter),
    name: document.querySelector("#centerNameInput").value.trim() || "Alliance",
    address: document.querySelector("#centerAddressInput").value.trim(),
    phone: document.querySelector("#centerPhoneInput").value.trim(),
    email: document.querySelector("#centerEmailInput").value.trim(),
    adminReferent: document.querySelector("#adminReferentInput").value.trim(),
    pedagogicalReferent: document.querySelector("#pedagogicalReferentInput").value.trim()
  };

  saveState();
  render();
}

function updateCenterLogo(event) {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    state.center = {
      ...(state.center || defaultCenter),
      logo: reader.result
    };
    saveState();
    render();
  });
  reader.readAsDataURL(file);
}

function exportCsv() {
  const headers = ["Nom", "Formation", "Modalité", "Référent", "Nom tuteur", "Prénom tuteur", "Poste tuteur", "Entreprise tuteur", "Diplôme suivi", "Téléphone tuteur", "E-mail tuteur", "Date entrée", "Statut", "Présence", "Progression"];
  const rows = state.learners.map((learner) => {
    const tutor = state.tutors?.find((item) => item.learnerId === learner.id);
    return [
      learner.name,
      learner.program,
      learner.modality || "Présentiel",
      learner.coach,
      tutor?.lastName || "",
      tutor?.firstName || "",
      tutor?.position || "",
      tutor?.company || "",
      tutor?.diploma || learner.program,
      tutor?.phone || "",
      tutor?.email || "",
      learner.startDate,
      learner.status,
      `${learner.attendance}%`,
      `${progressOf(learner)}%`
    ];
  });

  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "suivi-apprentissage-alliance.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function exportBackup() {
  const backup = {
    exportedAt: new Date().toISOString(),
    app: "Alliance suivi apprentissage",
    version: 1,
    state
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `sauvegarde-alliance-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importBackup(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(reader.result);
      const importedState = parsed.state || parsed;
      if (!importedState || !Array.isArray(importedState.learners)) {
        throw new Error("Invalid backup");
      }

      if (!confirm("Importer cette sauvegarde ? Les données actuelles seront remplacées.")) {
        return;
      }

      state = {
        learners: importedState.learners.map(normalizeLearner),
        trainers: normalizeTrainers(importedState.trainers || []),
        tutors: normalizeTutors(importedState.tutors || []),
        referentials: normalizeReferentials(importedState.referentials || defaultReferentials),
        center: { ...defaultCenter, ...(importedState.center || {}) }
      };
      selectedLearnerId = state.learners[0]?.id || null;
      selectedMessageLearnerId = state.learners[0]?.id || null;
      currentTraineeId = null;
      currentTrainerId = null;
      currentTutorId = null;
      saveState();
      setView("dashboard");
      render();
    } catch {
      alert("La sauvegarde n'a pas pu être importée. Vérifiez le fichier JSON.");
    } finally {
      event.target.value = "";
    }
  });
  reader.readAsText(file);
}

function resetData() {
  if (!confirm("Réinitialiser les données d'exemple ?")) {
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  state = createDefaultState(state.center || defaultCenter);
  selectedLearnerId = state.learners[0]?.id || null;
  saveState();
  render();
}

function deleteLearner(learnerId) {
  const learner = state.learners.find((item) => item.id === learnerId);
  if (!learner || !confirm(`Supprimer la fiche de ${learner.name} ?`)) {
    return;
  }

  state.learners = state.learners.filter((item) => item.id !== learnerId);
  state.trainers = (state.trainers || []).map((trainer) => ({
    ...trainer,
    learnerIds: trainer.learnerIds.filter((id) => id !== learnerId)
  }));
  state.tutors = (state.tutors || []).filter((item) => item.learnerId !== learnerId);
  selectedLearnerId = state.learners[0]?.id || null;
  saveState();
  render();
}

function deleteTrainer(trainerId) {
  const trainer = (state.trainers || []).find((item) => item.id === trainerId);
  if (!trainer || !confirm(`Supprimer le formateur ${personFullName(trainer) || "sélectionné"} ?`)) {
    return;
  }

  state.trainers = (state.trainers || []).filter((item) => item.id !== trainerId);
  saveState();
  render();
}

function deleteTutor(tutorId) {
  const tutor = (state.tutors || []).find((item) => item.id === tutorId);
  if (!tutor || !confirm(`Supprimer le tuteur ${tutorFullName(tutor) || "sélectionné"} ?`)) {
    return;
  }

  state.tutors = (state.tutors || []).filter((item) => item.id !== tutorId);
  saveState();
  render();
}

function deleteReferential(referentialId) {
  const referential = (state.referentials || []).find((item) => item.id === referentialId);
  if (!referential || !confirm(`Supprimer le référentiel ${referential.program} - ${referential.modality} ?`)) {
    return;
  }

  state.referentials = (state.referentials || []).filter((item) => item.id !== referentialId);
  saveState();
  render();
}

function deleteReferentialItem(referentialId, categoryId, itemId) {
  const referential = (state.referentials || []).find((item) => item.id === referentialId);
  const category = referential?.categories.find((item) => item.id === categoryId);
  if (!category) {
    return;
  }

  category.items = category.items.filter((item) => item.id !== itemId);
  referential.categories = referential.categories.filter((item) => item.items.length);
  saveState();
  renderReferentials();
}

function updateLearnerModality(learnerId, modality) {
  const learner = state.learners.find((item) => item.id === learnerId);
  if (!learner) {
    return;
  }

  learner.modality = modality;
  saveState();
  render();
}

function getProgramTemplate(program, modality = "Présentiel") {
  const normalized = program.toLowerCase();
  const normalizedModality = modality.toLowerCase();
  const referentials = state.referentials || [];
  const matchingReferentials = referentials.filter((referential) => sameProgram(referential.program, program));
  const exactReferential = matchingReferentials.find((referential) => referential.modality.toLowerCase() === normalizedModality);

  if (exactReferential) {
    return {
      label: exactReferential.program,
      modality: exactReferential.modality,
      modules: modulesFromReferential(exactReferential)
    };
  }

  if (normalizedModality === "hybride" && matchingReferentials.length) {
    const presentiel = matchingReferentials.find((referential) => referential.modality === "Présentiel");
    const distanciel = matchingReferentials.find((referential) => referential.modality === "Distanciel");
    if (presentiel || distanciel) {
      return {
        label: program,
        modality: "Hybride",
        modules: [
          ...(presentiel ? modulesFromReferential(presentiel) : []),
          ...(distanciel ? modulesFromReferential(distanciel) : [])
        ]
      };
    }
  }

  if (normalized.includes("ovp") || normalized.includes("vidéoprotection") || normalized.includes("video protection")) {
    if (normalizedModality === "présentiel") {
      return programTemplates.ovp;
    }

    if (normalizedModality === "distanciel") {
      return programTemplates.ovpDistance;
    }

    if (normalizedModality === "hybride") {
      return {
        label: programTemplates.ovp.label,
        modality: "Hybride",
        modules: [
          ...programTemplates.ovp.modules.map((module) => ({ ...module, name: `Présentiel : ${module.name}` })),
          ...programTemplates.ovpDistance.modules
        ]
      };
    }
  }

  return null;
}

function modulesFromReferential(referential) {
  return referential.categories.flatMap((category) => (
    category.items.map((item) => ({
      name: `${referential.modality} : ${category.title} : ${item.text}`,
      done: false
    }))
  ));
}

function sameProgram(first, second) {
  return normalizeText(first) === normalizeText(second)
    || normalizeText(first).includes(normalizeText(second))
    || normalizeText(second).includes(normalizeText(first));
}

function modulesForProgram(program, modality) {
  const template = getProgramTemplate(program, modality);
  if (template) {
    return structuredClone(template.modules);
  }

  return [
    { name: "Diagnostic initial", done: true },
    { name: "Compétence 1", done: false },
    { name: "Compétence 2", done: false },
    { name: "Bilan final", done: false }
  ];
}

function applyTemplate(learnerId, template) {
  const learner = state.learners.find((item) => item.id === learnerId);
  if (!learner || !confirm(`Remplacer les modules actuels par le référentiel ${template.label} ?`)) {
    return;
  }

  learner.modules = structuredClone(template.modules);
  saveState();
  render();
}

function formatDate(value) {
  return new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function generateAccessCode(name) {
  const clean = (name || "STAGIAIRE")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase();
  const prefix = (clean.slice(0, 4) || "STAG").padEnd(4, "X");
  let hash = 0;
  for (const character of clean) {
    hash = (hash * 31 + character.charCodeAt(0)) % 10000;
  }

  return `${prefix}-${String(hash).padStart(4, "0")}`;
}

function generateProfileCode(prefix, name) {
  const clean = (name || prefix)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase();
  let hash = 0;
  for (const character of clean) {
    hash = (hash * 29 + character.charCodeAt(0)) % 10000;
  }

  return `${prefix}-${String(hash).padStart(4, "0")}`;
}

function normalizeSpecialties(value) {
  const items = Array.isArray(value) ? value : String(value || "").split(",");
  return items
    .map((item) => item.trim())
    .filter(Boolean);
}

function splitTutorName(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) {
    return { firstName: "", lastName: "" };
  }

  if (parts.length === 1) {
    return { firstName: "", lastName: parts[0] };
  }

  return {
    firstName: parts.slice(0, -1).join(" "),
    lastName: parts.at(-1)
  };
}

function tutorFullName(tutor) {
  return [tutor.firstName, tutor.lastName].filter(Boolean).join(" ").trim();
}

function personFullName(person) {
  return [person.firstName, person.lastName].filter(Boolean).join(" ").trim();
}

function normalizeAccessCode(code) {
  return String(code || "").trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

if ("serviceWorker" in navigator && isServerMode()) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {
      // The application still works normally when install support is unavailable.
    });
  });
}
