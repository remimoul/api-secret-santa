const nodemailer = require('nodemailer');

const sendGroupInviteEmail = (email, groupName,group_id,user_id,token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'apitestmds@gmail.com',
      pass: 'bswh ebbt knqd isgi'
    }
  });

  const mailOptions = {
    from: 'apitestmds@gmail.com',
    to: email,
    subject: `Secret Santa 🎅​ - Invitation à rejoindre le groupe ${groupName}`,
    html: `
        <p>Salut 👋,<br> Vous êtes invité à rejoindre le groupe ${groupName}. <br>Veuillez accepter ou refuser l'invitation du Secret-Santa 🎅​ .</p>
        <a href="http://localhost:3005/group/accept-invite?group_id=${group_id}&user_id=${user_id}&token=${token}" style="display: inline-block; padding: 10px 20px; color: white; background-color: #007BFF; text-decoration: none;">Accepter l'invitation</a>
        <a href="http://localhost:3005/group/decline-invite?group_id=${group_id}&user_id=${user_id}" style="display: inline-block; padding: 10px 20px; margin: 10px; color: white; background-color: #dc3545; text-decoration: none;">Refuser l'invitation</a>
        <br>
        <p>Cordialement,<br>Secret Santa 🎅​</p>
    `
    
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = { sendGroupInviteEmail };