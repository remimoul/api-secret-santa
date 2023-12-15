const nodemailer = require('nodemailer');

const sendGroupInviteEmail = (email, groupName) => {
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
    subject: `Invitation à rejoindre le groupe ${groupName}`,
    text: `Vous etes invitez à rejoindre le groupe ${groupName}. Veuillez accepter ou refuser l'invitation sur votre compte Secret-Santa. Merci !`
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