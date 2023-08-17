import { Router } from 'express';
import { User } from '../models/user';

const router = Router();

let users: User[] = [];

// Create
router.post('/', (req, res) => {
  const user: User = {
    id: Date.now(),
    ...req.body
  };
  users.push(user);
  res.status(201).json(user);
});

// Read all
router.get('/', (req, res) => {
  res.json(users);
});

// Read one
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === +req.params.id);
  if (user) res.json(user);
  else res.status(404).send('User not found');
});

// Update
router.put('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === +req.params.id);
  if (index !== -1) {
    users[index] = { id: +req.params.id, ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).send('User not found');
  }
});

// Delete
router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id !== +req.params.id);
  res.status(204).send();
});

export default router;
