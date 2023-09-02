import express from 'express';
import * as notificationController from '../controllers/notificationController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', authMiddleware, notificationController.getAllNotifications);
router.put('/:notificationId', authMiddleware, notificationController.markAsRead);
router.delete('/:notificationId', authMiddleware, notificationController.deleteNotification);

export default router;
