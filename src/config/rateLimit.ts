import rateLimit from 'express-rate-limit';
import logger from '../utils/logger';

// Define a rate limiter middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
  onLimitReached: (req) => {
    logger.warn(`Rate limit reached for IP: ${req.ip}`);
  }
});

export default limiter;
