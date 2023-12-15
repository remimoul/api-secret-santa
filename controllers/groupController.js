const Group = require("../model/groupModel");
const User = require("../model/userModel");
const { sendGroupInviteEmail } = require("../controllers/mailController");

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
        const group = await Group.findById(group_id);
        const userToInvite = await User.findOne({ email });
        if (!userToInvite) {
            return res.status(400).json({ error: 'User not found' });
        }
  group.invitedMembers.push(userToInvite._id);
  await group.save();
  sendGroupInviteEmail(email, group.name);
  res.json({ message: 'Invitation sent' });

    }catch (error) {
        console.error(error);
        res.status(401).json({ message: "requete invalide" });
    }
}

exports.acceptInvite = async (req, res) => {
    try {
      const { group_id, user_id } = req.body;
      const group = await Group.findById(group_id);
      if (!group.invitedMembers.includes(user_id)) {
        return res.status(400).json({ error: 'User not invited to this group' });
      }
  
      // Remove the user from the invitedMembers array
      const index = group.invitedMembers.indexOf(userId);
      if (index > -1) {
        group.invitedMembers.splice(index, 1);
      }
  
      // Add the user to the members array
      if (!group.members.includes(userId)) {
        group.members.push(userId);
      }
  
      await group.save();
  
      res.json({ message: 'Invitation accepted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  };