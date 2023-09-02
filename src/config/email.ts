import nodemailer from 'nodemailer';
import logger from '../utils/logger';

// Create a transporter using nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Verify the connection configuration
transporter.verify((error, success) => {
  if (error) {
    logger.error(`Email server error: ${error}`);
  } else {
    logger.info('Email server is ready to take messages');
  }
});

export default transporter;
