const Group = require("../model/groupModel");
const User = require("../model/userModel");
const { sendGroupInviteEmail } = require("../controllers/mailController");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Invitation = require('../model/invitationModel');

exports.createGroup = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id);

        if (!user) {
            return res.status(404).json({ message: "Utilisateur inexistant" });
          }
        const newGroup = new Group({
        name: req.body.name,
        creator: user._id,
        members: [user._id],
        });
        try {
            const group = await newGroup.save();
           res.status(201).json(group);

        }catch (error) {
            console.error(error);
            res.status(401).json({ message: "requete invalide" });
        }
     
    }catch (error) {
        console.error(error);
        res.status(401).json({ message: "requete invalide" });
    }
}

exports.inviteMember = async (req, res) => {
    try{
        const { group_id, email } = req.body;
        const token = jwt.sign({ group_id, email }, process.env.JWT_KEY, { expiresIn: '48h' });
        const newInvitation = new Invitation({ email, group_id: group_id, token, expiresAt: Date.now() + 48 * 60 * 60 * 1000 });
        await newInvitation.save();


        const group = await Group.findById(group_id);
        const user = await User.findById(req.params.user_id);
        const userToInvite = await User.findOne({ email });
        if (!userToInvite) {
            return res.status(400).json({ error: 'Utilisateur non trouvé' });
        }

        if (user._id.toString() === group.creator.toString()) {
            group.invitedMembers.push(userToInvite._id);
            await group.save();
            sendGroupInviteEmail(email, group.name,group_id,userToInvite._id,token);
            res.json({ message: 'Invitation envoyé' });
          }else {
            return res.status(403).json({ error: 'Seulement le créateur du groupe peut envoyer des invitations.' });
          }
    }catch (error) {
        console.error(error);
        res.status(401).json({ message: "requete invalide" });
    }
}

exports.acceptInvite = async (req, res) => {
  
    try {
      // validation du token par lien dans le mail grace req.query
      const { group_id, user_id, token } = req.query.group_id ? req.query : req.body;

    const invitation = await Invitation.findOne({ token });
    if (!invitation) {
        return res.status(400).json({ error: 'Token invalide' });
    }

      const group = await Group.findById(group_id);
      if (!group.invitedMembers.includes(user_id)) {
        return res.status(400).json({ error: 'Utilisateur incorrect' });
      }
  
      // Remove the user from the invitedMembers array
      const index = group.invitedMembers.indexOf(user_id);
      if (index > -1) {
        group.invitedMembers.splice(index, 1);
      }
  
      // Add the user to the members array
      if (!group.members.includes(user_id)) {
        group.members.push(user_id);
      }
  
      await group.save();
      await Invitation.deleteOne({ token });
  
      res.json({ message: 'Invitation accepté' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  };

  exports.declineInvite = async (req, res) => {
    try{
      //Possibilité de faire une validation du token par lien http dans le mail grace req.query et requete sur postman
        const { group_id, user_id } = req.query.group_id ? req.query : req.body;
        const group = await Group.findById(group_id);
        const invitation = await Invitation.findOne();
        if (!group.invitedMembers.includes(user_id)) {
          return res.status(400).json({ error: 'Utilisateur incorrect' });
        }
    
        // Remove the user from the invitedMembers array
        const index = group.invitedMembers.indexOf(user_id);
        if (index > -1) {
          group.invitedMembers.splice(index, 1);
        }

           // Add the user to the decline members array
      if (!group.declineMembers.includes(user_id)) {
            group.declineMembers.push(user_id);
      }
    
        await group.save();
        await invitation.deleteOne({ _id: invitation._id });
    
        res.json({ message: 'Invitation Refuser' });

    }catch (error) {
        console.error(error);
        res.status(401).json({ message: "requete invalide" });
    }
  }


  exports.removeMember = async (req, res) => {
    try {
      const { group_id, user_id } = req.body;
      const group = await Group.findById(group_id);
      const user = await User.findById(req.params.user_id);

      if (user._id.toString() !== group.creator.toString()) {
        return res.status(403).json({ error: 'Seulement le créateur du groupe peut supprimer un membre.' });
      }
      
    // Find the index of the user in the members array
    const index = group.members.indexOf(user_id);
    if (index > -1) {
      // Remove the user from the members array
      group.members.splice(index, 1);
      await group.save();
      res.json({ message: 'Membre supprimé' });
    } else {
      res.status(400).json({ error: 'user_id non trouvé dans le groupe' });
    }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  };