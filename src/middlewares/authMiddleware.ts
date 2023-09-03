import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userSchema';
import logger from '../utils/logger';

const authMiddleware = async (req: Request & { user?: any }, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).send({ error: 'Authentication required' });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || 'defaultsecret');
    const user = await User.findById(decoded._id);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    logger.error('Authentication error: ', error);
    res.status(401).send({ error: 'Please authenticate' });
  }
};

export default authMiddleware;
