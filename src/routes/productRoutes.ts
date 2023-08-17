import { Router } from 'express';
import { Product } from '../models/product';

const router = Router();

let products: Product[] = [];

// Create
router.post('/', (req, res) => {
  const product: Product = {
    id: Date.now(),
    ...req.body
  };
  products.push(product);
  res.status(201).json(product);
});

// Read all
router.get('/', (req, res) => {
  res.json(products);
});

// Read one
router.get('/:id', (req, res) => {
  const product = products.find(u => u.id === +req.params.id);
  if (product) res.json(product);
  else res.status(404).send('Product not found');
});

// Update
router.put('/:id', (req, res) => {
  const index = products.findIndex(u => u.id === +req.params.id);
  if (index !== -1) {
    products[index] = { id: +req.params.id, ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).send('Product not found');
  }
});

// Delete
router.delete('/:id', (req, res) => {
  products = products.filter(u => u.id !== +req.params.id);
  res.status(204).send();
});

export default router;
