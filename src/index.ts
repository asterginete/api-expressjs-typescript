import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import redis from 'redis';
import { Client as ElasticsearchClient } from 'elasticsearch';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import connectDB from './config/db';
import rateLimit from './middlewares/rateLimit';
import logger from './utils/logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Initialize Redis
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT)
});

redisClient.on('error', (error) => {
  logger.error(`Redis error: ${error}`);
});

// Initialize Elasticsearch
const esClient = new ElasticsearchClient({
  host: process.env.ELASTICSEARCH_URL,
  log: 'trace'
});

// Middlewares
app.use(express.json());
app.use(rateLimit);

// Routes
app.use('/api/users', userRoutes);
// ... other route imports ...

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  logger.info(`Server started on http://localhost:${PORT}`);
});

export { redisClient, esClient };  // Exporting for other modules if needed
