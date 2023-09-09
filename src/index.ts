import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import rateLimit from './middlewares/rateLimit';
import errorHandler from './utils/errorHandler';
import logger from './utils/logger';

import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import notificationRoutes from './routes/notificationRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  logger.info('Connected to MongoDB');
}).catch((error) => {
  logger.error(`Error connecting to MongoDB: ${error.message}`);
});

// Middlewares
app.use(bodyParser.json());
app.use(rateLimit);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/notifications', notificationRoutes);

// Error handling middleware
app.use(errorHandler.globalErrorHandler);

// Start server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

export default app;
