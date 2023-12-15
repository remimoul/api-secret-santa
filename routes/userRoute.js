const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

/**
 * @swagger
 * /user/login: 
 *  post:
  *    tags:
 *      - user
 *    description: ✔️ Login a user 
*    parameters:
 *      - in: body
 *        name: user
 *        description: The user to login
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router
  .route("/user/login").post(userControllers.userLogin);

  
  /**
 * @swagger
 * /user/register:
 *  post:
  *    tags:
 *      - user
 *    description: ✔️ Register a new user
 *    parameters:
 *      - in: body
 *        name: user
 *        description: The user to login
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router
  .route("/user/register")
  .post(userControllers.createAUser);

router
  .route("/user/:id_user")
  .put(jwtMiddleware.verifyToken, userControllers.updateUser)
    /**
 * @swagger
 * /user/{id_user}:
 *  put:
  *    tags:
 *      - user
 *    description: ✔️ update user
*    parameters:
 *      - in: path
 *        name: id_user
 *        description: ID of the user to update
 *        required: true
 *        type: string
 *      - in: body
 *        name: user
 *        description: User data to update
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
  .delete(jwtMiddleware.verifyToken,userControllers.deleteUser);

    /**
 * @swagger
 * /user/{id_user}:
 *  delete:
  *    tags:
 *      - user
 *    description: ✔️ Delete one user
 *    parameters:
 *      - in: path
 *        name: id_user
 *        description: ID of the user to delete
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */



module.exports = router;
