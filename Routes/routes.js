

const express = require('express')

const router =express.Router()


/**
 * @swagger
 * /api/example:
 *   get:
 *     summary: Get example data
 *     description: Returns example data.
 *     responses:
 *       '200':
 *         description: A successful response
 *         content:
 *           application/json:
 *             example:
 *               message: Example data
 */

router.get('/api/example', (req, res) => {
    res.json({ message: 'Example data' });
  });


const User = require("../models/userSchema")
const usercontroller = require("../controller/usercontroller")
const upload = require("../multer/imageconfig")


/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     description: Endpoint for user registration. Requires email, name, password, and an optional image.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: example@email.com
 *               name: John Doe
 *               password: securepassword123
 *     responses:
 *       '200':
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User registered successfully
 */
router.post('/register', upload.single("img"), usercontroller.userregister);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login 
 *     description: Endpoint for user login. Requires email, password. Returns token if successful.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: example@email.com
 *               password: securepassword123
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User logged in successfully
 */
router.post('/login',usercontroller.userlogin)
/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all user details
 *     description: Retrieve all user details from the database.
 *     responses:
 *       '200':
 *         description: User details retrieved successfully
 *         content:
 *           application/json:
 *             example:
 *               users:
 *                 - id: "1"
 *                   name: John Doe
 *                   email: john@example.com
 *                 - id: "2"
 *                   name: Jane Doe
 *                   email: jane@example.com
 *               message: User details retrieved successfully
 */
router.get("/", usercontroller.userdetails);


/**
 * @swagger
 * /getuser/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve user information based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to retrieve.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               user:
 *                 id: "123456"
 *                 name: John Doe
 *                 email: example@email.com
 */
router.get("/getuser/:id", usercontroller.getUserById);


/**
 * @swagger
 * /update/{id}:
 *   put:
 *     summary: Update user details by ID
 *     description: Update user information based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               name: Updated Name
 *               email: updated@example.com
 *               password: updatedPassword123
 *     responses:
 *       '200':
 *         description: User details updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User details updated successfully
 */
router.put("/update/:id", usercontroller.updateUserDetails);

/**
 * @swagger
 * /deleteUser/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     description: Delete a user based on the provided ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the user to delete.
 *     responses:
 *       '200':
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: User deleted successfully
 */
router.delete("/deleteUser/:id", usercontroller.deleteUser);


module.exports=router