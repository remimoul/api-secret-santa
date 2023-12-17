/**
 * @swagger
 * /group/create/{user_id}:
 *  post:
 *    tags:
 *      - group
 *    description: ✔️ create group
 *    parameters:
 *      - in: header
 *        name: Authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: Token d'authentification
 *      - in: path
 *        name: user_id
 *        description: ID of the user to create a group
 *        required: true
 *        schema:
 *          type: string
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


  /**
 * @swagger
 * /group/invite/{user_id}:
 *  post:
  *    tags:
 *      - group
 *    description: ✔️ invitation group
 *    parameters:
  *      - in: header
 *        name: Authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: Token d'authentification
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

  
    /**
   * @swagger
   * /group/delete/{user_id}:
   *  delete:
    *    tags:
   *      - group
   *    description: ✔️ Admin(creator group) delete member
   *    parameters:
    *      - in: header
 *        name: Authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: Token d'authentification
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



  /**
 * @swagger
 * /group/assign/{user_id}:
 *  post:
  *    tags:
 *      - group
 *    description: ✔️ Assign Secret Santa to each member of the group
 *    parameters:
  *      - in: header
 *        name: Authorization
 *        schema:
 *          type: string
 *        required: true
 *        description: Token d'authentification
    *      - in: path
 *        name: user_id
 *        description: id user of creator group
 *        required: true
 *        type: string
 *      - in: body
 *        name: group
 *        description: entry group id
 *        schema:
 *          type: object
 *          required:
 *            - group_id
 *          properties:
 *            group_id:
 *              type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */

/**
 *  _    _ _____ _____ 
 * | |  | |_   _|  __ \
 * | |  | | | | | |  | |
 * | |  | | | | | |  | |
 * | |__| |_| |_| |__| |
 *  \____/|_____|_____/
 *                     
 */
  
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



      /**
   * @swagger
   * /user/{id_user}:
   *  put:
    *    tags:
   *      - user
   *    description: ✔️ update user
  *    parameters:
   *      - in: header
   *        name: Authorization
   *        schema:
   *          type: string
   *        required: true
   *        description: Token d'authentification
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


      /**
   * @swagger
   * /user/{id_user}:
   *  delete:
    *    tags:
   *      - user
   *    description: ✔️ Delete one user
   *    parameters:
    *      - in: header
   *        name: Authorization
   *        schema:
   *          type: string
   *        required: true
   *        description: Token d'authentification
   *      - in: path
   *        name: id_user
   *        description: ID of the user to delete
   *        required: true
   *        type: string
   *    responses:
   *      '200':
   *        description: A successful response
   */
  

  