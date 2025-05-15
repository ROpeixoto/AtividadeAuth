import express from 'express';
import itemController from '../controller/item.controller.js';
import verifyToken from '../middleware/jwt.token.middleware.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * tags:
 *   name: Items
 *   description: API for managing items
 */

/**
 * @swagger
 * /items/:
 *   post:
 *     summary: Add a new item
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the item
 *               description:
 *                 type: string
 *                 description: Description of the item
 *               price:
 *                 type: number
 *                 description: Price of the item
 *             required:
 *               - name
 *               - price
 *     responses:
 *       201:
 *         description: Item created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */

router.post('/', verifyToken, itemController.addItem);
router.get('/', verifyToken, itemController.getItems);
router.get('/:id', verifyToken, itemController.getItemDetail);
router.put('/:id', verifyToken, itemController.updateItem);
router.patch('/:id', verifyToken, itemController.patchItem);
router.delete('/:id', verifyToken, itemController.deleteItem);

export default router;