const express = require("express");
const router = express.Router();
const groupControllers = require("../controllers/groupController");
const jwtMiddleware = require("../middleware/jwtMiddleware");


router.
   route("/create/:user_id")
   .post(jwtMiddleware.verifyToken, groupControllers.createGroup);

   router.
   route("/invite/:user_id")
   .post(jwtMiddleware.verifyToken, groupControllers.inviteMember);

   router.
   route("/accept-invite")
   .get(groupControllers.acceptInvite);

   router.
   route("/decline-invite")
   .get(groupControllers.declineInvite);
   
   router.
   route("/delete/:user_id")
   .delete(jwtMiddleware.verifyToken, groupControllers.removeMember);
  
   router.
   route("/assign/:user_id")
   .post(jwtMiddleware.verifyToken,groupControllers.assignSecretSantas);

module.exports = router;
