import express from 'express';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
