import nodemailer from 'nodemailer';
import transporter from '../config/email';

class EmailService {
  async sendEmail(to: string, subject: string, text: string, html?: string) {
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'no-reply@example.com',
      to,
      subject,
      text,
      html
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      throw new Error(`Error sending email: ${error.message}`);
    }
  }
}

export default new EmailService();
