import mongoose from 'mongoose';
import logger from '../utils/logger';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/database-name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    logger.info('MongoDB connected successfully');
  } catch (error) {
    logger.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);  // Exit process with failure
  }
};

export default connectDB;
