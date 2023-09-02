import express from 'express';
import * as orderController from '../controllers/orderController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authMiddleware, orderController.createOrder);
router.get('/', authMiddleware, orderController.getAllOrders);
router.get('/:orderId', authMiddleware, orderController.getOrderById);
router.put('/:orderId', authMiddleware, orderController.updateOrder);
router.delete('/:orderId', authMiddleware, orderController.deleteOrder);

export default router;
