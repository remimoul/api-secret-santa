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
    route("/invite")
    .post(groupControllers.inviteMember);

    router.
    route("/accept-invite")
    .post(groupControllers.acceptInvite);


module.exports = router;
