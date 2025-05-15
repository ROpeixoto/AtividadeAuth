import express from 'express';
import userController from '../controller/user.controller.js';

const router = express.Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Create a new user
 *     description: Register a new user with username, email, and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: User's username.
 *                 example: johndoe
 *               email:
 *                 type: string
 *                 description: User's email address.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: User's password.
 *                 example: StrongPassword123
 *             required:
 *               - username
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User successfully created.
 *       400:
 *         description: Bad request. Invalid input.
 *       500:
 *         description: Internal server error.
 */
router.post('/register', userController.register);

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: User login
 *     description: Authenticate a user with email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: User's email address.
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 description: User's password.
 *                 example: StrongPassword123
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: User successfully authenticated.
 *       400:
 *         description: Bad request. Invalid input.
 *       401:
 *         description: Unauthorized. Invalid credentials.
 *       500:
 *         description: Internal server error.
 */
router.post('/login', userController.login);

export default router;