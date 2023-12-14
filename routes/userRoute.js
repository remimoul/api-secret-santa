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
  .route("/user/:user_id")
  .all(jwtMiddleware.verifyToken)
  .put(userControllers.updateUser)
    /**
 * @swagger
 * /user/{user_id}}:
 *  put:
  *    tags:
 *      - user
 *    description: ✔️ update user
*    parameters:
 *      - in: path
 *        name: user_id
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
 *          properties:
 *            email:
 *              type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
  .delete(userControllers.deleteUser);

    /**
 * @swagger
 * /user/{user_id}:
 *  delete:
  *    tags:
 *      - user
 *    description: ✔️ Delete one user
 *    parameters:
 *      - in: path
 *        name: user_id
 *        description: ID of the user to delete
 *        required: true
 *        type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */



module.exports = router;
