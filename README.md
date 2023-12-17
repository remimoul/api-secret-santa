# API Secret Santa 🎅​

This Node.js API lets you manage Secret Santa groups. Users can create groups, invite members, accept or decline invitations, and the group creator can delete members.
You can access my API at the following address: [https://remi-secret-santa-b71c0fe1ece9.herokuapp.com/](https://remi-secret-santa-b71c0fe1ece9.herokuapp.com/)

## Introduction 📄​

The Secret Santa API has been designed to facilitate the organization of Secret Santa events. It allows you to manage groups, invitations and members.

## What you can do using the Secret Santa API ​🔎​

Here are a few examples of how to use this API:

- Create a new group: `POST /group/create/{user_id}`
- Invite a member to a group: `POST /group/invite/{user_id}`
- Accept an invitation to a group: `POST /group/accept-invite`.
- Delete a group member: `DELETE /group/delete/{user_id}`

## ​🔐​ Authentification ​🔑​

This project uses environment variables to manage configuration parameters. These variables must be defined in a `.env` file at the root of the project.

Here's an example file `.env` :

`JWT_KEY=your_secret_key`

## ​🔥​ Try the API (Swagger) ​🔥​ ​🗂️​ ​​

https://remi-secret-santa-b71c0fe1ece9.herokuapp.com/api-docs/


## ​⚡​ Install ​⚡​

To install and run this project locally, follow these steps:

```bash
git clone https://github.com/remimoul/api-secret-santa.git
cd api-secret-santa
npm install
npm start