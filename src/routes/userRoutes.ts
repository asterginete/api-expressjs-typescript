import { generateToken, hashPassword, comparePassword } from '../auth/authService';
import { authenticate, authorize } from '../auth/authMiddleware';
import { Router } from 'express';
import { User } from '../models/user';

const router = Router();

let users: User[] = [];

// Register
router.post('/register', async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  const user: User = {
    id: Date.now(),
    ...req.body,
    password: hashedPassword,
    role: 'user'
  };
  users.push(user);
  res.status(201).json({ message: 'User registered successfully' });
});

// Login
router.post('/login', async (req, res) => {
  const user = users.find(u => u.email === req.body.email);
  if (user && await comparePassword(req.body.password, user.password)) {
    const token = generateToken(user.id, user.role);
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

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
router.get('/', authenticate, authorize('admin'), (req, res) => {
  res.json(users);
});

// Read one
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === +req.params.id);
  if (user) res.json(user);
  else res.status(404).send('User not found');
});

// Update
router.put('/:id', authenticate, authorize('admin'), (req, res) => {
  const index = users.findIndex(u => u.id === +req.params.id);
  if (index !== -1) {
    users[index] = { id: +req.params.id, ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).send('User not found');
  }
});

// Delete
router.delete('/:id', authenticate, authorize('admin'), (req, res) => {
  users = users.filter(u => u.id !== +req.params.id);
  res.status(204).send();
});

export default router;
