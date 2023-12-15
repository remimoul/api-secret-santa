# API Secret Santa 🎅​

Cette API Node.js permet de gérer les groupes de Secret Santa. Les utilisateurs peuvent créer des groupes, inviter des membres, accepter ou refuser des invitations et le créateur du groupe peut supprimer des membres.

## Introduction 📄​

L'API Secret Santa a été conçue pour faciliter l'organisation des événements Secret Santa. Elle permet de gérer les groupes, les invitations et les membres.

## Ce que vous pouvez faire avec l'API Secret Santa ​🔎​

Voici quelques exemples d'utilisation de cette API :

- Créer un nouveau groupe : `POST /group/create/{user_id}`
- Inviter un membre à un groupe : `POST /group/invite/{user_id}`
- Accepter une invitation à un groupe : `POST /group/accept-invite`
- Supprimer un membre d'un groupe : `DELETE /group/delete/{user_id}`

## ​🔐​ Authentification ​🔑​

Ce projet utilise des variables d'environnement pour gérer les paramètres de configuration. Ces variables doivent être définies dans un fichier `.env` à la racine du projet.

Voici un exemple de fichier `.env` :

`JWT_KEY=votre_cle_secrete`

## ​🔥​ Docs des routes de l'API avec l'inferface Swagger ​🔥​ ​🗂️​ ​​

http://localhost:3005/api-docs/


## ​⚡​ Installation ​⚡​

Pour installer et exécuter ce projet localement, suivez les étapes suivantes :

```bash
git clone https://github.com/remimoul/api-secret-santa.git
cd secret-santa
npm install
npm start