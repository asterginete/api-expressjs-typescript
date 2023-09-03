import Notification from '../models/notificationSchema';

class NotificationService {
  async createNotification(userId: string, message: string) {
    try {
      const notification = new Notification({
        user: userId,
        message
      });
      await notification.save();
      return notification;
    } catch (error) {
      throw new Error(`Error creating notification: ${error.message}`);
    }
  }

  async getNotifications(userId: string) {
    try {
      const notifications = await Notification.find({ user: userId }).sort({ date: -1 });
      return notifications;
    } catch (error) {
      throw new Error(`Error fetching notifications: ${error.message}`);
    }
  }

  async markAsRead(notificationId: string) {
    try {
      const notification = await Notification.findById(notificationId);
      if (!notification) {
        throw new Error('Notification not found');
      }
      notification.read = true;
      await notification.save();
      return notification;
    } catch (error) {
      throw new Error(`Error marking notification as read: ${error.message}`);
    }
  }
}

export default new NotificationService();
