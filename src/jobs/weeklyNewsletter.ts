import cron from 'node-cron';
import EmailService from '../services/emailService';
import User from '../models/userSchema';
import Product from '../models/productSchema';

class WeeklyNewsletter {
  constructor() {
    // Schedule the job to run every week on Sunday at 9 AM
    cron.schedule('0 9 * * SUN', this.sendNewsletter);
  }

  async sendNewsletter() {
    try {
      // Fetch all users
      const users = await User.find({});

      // Fetch the latest products (for example, the last 10 products added)
      const latestProducts = await Product.find({}).sort({ createdAt: -1 }).limit(10);

      // Construct the newsletter content
      let content = '<h2>Latest Products</h2><ul>';
      for (const product of latestProducts) {
        content += `<li>${product.name} - ${product.description}</li>`;
      }
      content += '</ul>';

      // Send the newsletter to all users
      for (const user of users) {
        await EmailService.sendEmail(
          user.email,
          'Weekly Newsletter',
          'Here are the latest products...',
          content
        );
      }
    } catch (error) {
      console.error(`Error sending weekly newsletter: ${error.message}`);
    }
  }
}

export default new WeeklyNewsletter();
