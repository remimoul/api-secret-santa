const express = require("express");
const router = express.Router();
const groupControllers = require("../controllers/groupController");
const jwtMiddleware = require("../middleware/jwtMiddleware");

  /**
 * @swagger
 * /group/create/{user_id}:
 *  post:
  *    tags:
 *      - group
 *    description: ✔️ create group
 *    parameters:
    *      - in: path
 *        name: user_id
 *        description: ID of the user to create a group
 *        required: true
 *        type: string
 *      - in: body
 *        name: group
 *        description: create one group
 *        schema:
 *          type: object
 *          required:
 *            - name
 *          properties:
 *            name:
 *              type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

router.
    route("/create/:user_id")
    .post(jwtMiddleware.verifyToken, groupControllers.createGroup);

    router.
    route("/invite/:user_id")
    .post(groupControllers.inviteMember);

  /**
 * @swagger
 * /group/invite/{user_id}:
 *  post:
  *    tags:
 *      - group
 *    description: ✔️ invitation group
 *    parameters:
    *      - in: path
 *        name: user_id
 *        description: invitation group
 *        required: true
 *        type: string
 *      - in: body
 *        name: group
 *        description: invitation group
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - group_id
 *          properties:
 *            email:
 *              type: string
 *            group_id:
 *              type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

    router.
    route("/accept-invite")
    .get(groupControllers.acceptInvite);

      /**
 * @swagger
 * /group/accept-invite:
 *  get:
  *    tags:
 *      - group
 *    description: ✔️ accept invitation group
 *    parameters:
 *      - in: body
 *        name: group
 *        description: accept invitation group
 *        schema:
 *          type: object
 *          required:
 *            - user_id
 *            - group_id
 *          properties:
 *            user_id:
 *              type: string
 *            group_id:
 *              type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

    router.
    route("/decline-invite")
    .get(groupControllers.declineInvite);

      /**
 * @swagger
 * /group/decline-invite:
 *  get:
  *    tags:
 *      - group
 *    description: ✔️ decline invitation group
 *    parameters:
 *      - in: body
 *        name: group
 *        description: decline invitation group
 *        schema:
 *          type: object
 *          required:
 *            - user_id
 *            - group_id
 *          properties:
 *            user_id:
 *              type: string
 *            group_id:
 *              type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */      

      router.
      route("/delete/:user_id")
      .delete(groupControllers.removeMember);
  
    /**
   * @swagger
   * /group/delete/{user_id}:
   *  delete:
    *    tags:
   *      - group
   *    description: ✔️ Admin(creator group) delete member
   *    parameters:
      *      - in: path
   *        name: user_id
   *        description: id user of creator group
   *        required: true
   *        type: string
   *      - in: body
   *        name: group
   *        description: entry id user to delete from group id
   *        schema:
   *          type: object
   *          required:
   *            - user_id
   *            - group_id
   *          properties:
   *            user_id:
   *              type: string
   *            group_id:
   *              type: string
   *    responses:
   *      '200':
   *        description: A successful response
   */

module.exports = router;
