import { Router, Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { User } from '../models/user';
import { generateToken, hashPassword, comparePassword } from '../auth/authService';

const router = Router();

let users: User[] = [];

// Register
router.post('/register', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

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
router.post('/login', [
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
], async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const user = users.find(u => u.email === req.body.email);
  if (user && await comparePassword(req.body.password, user.password)) {
    const token = generateToken(user.id, user.role);
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Read all users
router.get('/', (req: Request, res: Response) => {
  res.json(users);
});

// Read one user by ID
router.get('/:id', (req: Request, res: Response) => {
  const user = users.find(u => u.id === +req.params.id);
  if (user) res.json(user);
  else res.status(404).send('User not found');
});

// Update user by ID
router.put('/:id', (req: Request, res: Response) => {
  const index = users.findIndex(u => u.id === +req.params.id);
  if (index !== -1) {
    users[index] = { id: +req.params.id, ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).send('User not found');
  }
});

// Delete user by ID
router.delete('/:id', (req: Request, res: Response) => {
  users = users.filter(u => u.id !== +req.params.id);
  res.status(204).send();
});

export default router;
