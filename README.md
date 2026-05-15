# Alliance - Suivi d'apprentissage

Application web de suivi des stagiaires, référentiels OVP, messagerie et espace stagiaire.

## Lancer en local

```bash
node server.js
```

Ouvrir ensuite `http://127.0.0.1:4173`.

## Codes de test

- Admin Alliance : `ALLIANCE2026`
- Les codes stagiaires sont visibles dans chaque fiche apprenant.

## Variables d'environnement

- `PORT` : port du serveur.
- `HOST` : adresse d'écoute, `127.0.0.1` en local, `0.0.0.0` en ligne.
- `DATA_DIR` : dossier de sauvegarde du fichier `data.json`.
- `OPENAI_API_KEY` : clé API pour activer Christophe avec une vraie IA.
- `OPENAI_MODEL` : modèle utilisé par Christophe, par défaut `gpt-5.4-mini`.

## Déploiement Render

Le fichier `render.yaml` prépare un service web Node avec disque persistant pour les données.

Après avoir mis le projet sur GitHub :

1. Créer un compte Render.
2. Créer un nouveau Blueprint depuis le dépôt GitHub.
3. Vérifier les variables d'environnement.
4. Ajouter `OPENAI_API_KEY` seulement si vous souhaitez activer la vraie IA.
5. Déployer.
