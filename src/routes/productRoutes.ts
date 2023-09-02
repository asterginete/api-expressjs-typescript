import { Router } from 'express';
import { Product } from '../models/product';
import { authenticate, authorize } from '../auth/authMiddleware';

const router = Router();

let products: Product[] = [];

// Create
router.post('/', authenticate, authorize('admin'), (req, res) => {
  const product: Product = {
    id: Date.now(),
    ...req.body
  };
  products.push(product);
  res.status(201).json(product);
});

// Read all
router.get('/', authenticate, authorize('admin'), (req, res) => {
  res.json(products);
});

// Read one
router.get('/:id', (req, res) => {
  const product = products.find(u => u.id === +req.params.id);
  if (product) res.json(product);
  else res.status(404).send('Product not found');
});

// Update
router.put('/:id', authenticate, authorize('admin'), (req, res) => {
  const index = products.findIndex(u => u.id === +req.params.id);
  if (index !== -1) {
    products[index] = { id: +req.params.id, ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).send('Product not found');
  }
});

// Delete
router.delete('/:id', authenticate, authorize('admin'), (req, res) => {
  products = products.filter(u => u.id !== +req.params.id);
  res.status(204).send();
});

export default router;
import express from 'express';
import * as productController from '../controllers/productController';
import authMiddleware from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authMiddleware, productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.put('/:productId', authMiddleware, productController.updateProduct);
router.delete('/:productId', authMiddleware, productController.deleteProduct);

export default router;
