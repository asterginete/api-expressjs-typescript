import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const errorHandlingMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(`Error occurred: ${err.message}`);
  res.status(err.status || 500).send({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
};

export default errorHandlingMiddleware;
