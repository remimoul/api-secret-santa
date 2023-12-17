const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

router
  .route("/user/login").post(userControllers.userLogin);

router
  .route("/user/register")
  .post(userControllers.createAUser);

router
  .route("/user/:id_user")
  .put(jwtMiddleware.verifyToken, userControllers.updateUser)
  .delete(jwtMiddleware.verifyToken,userControllers.deleteUser);

module.exports = router;
