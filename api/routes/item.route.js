import express from 'express';
import itemController from '../controller/item.controller.js';
import verifyToken from '../middleware/jwt.token.middleware.js';

const router = express.Router();

router.post('/', verifyToken, itemController.addItem);
router.get('/', verifyToken, itemController.getItems);
router.get('/:id', verifyToken, itemController.getItemDetail);
router.put('/:id', verifyToken, itemController.updateItem);

export default router;