import express from 'express';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import connectDB from './config/db';

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
