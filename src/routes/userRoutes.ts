import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/userSchema';
import { generateToken, hashPassword, comparePassword } from '../auth/authService';

const router = Router();

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

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);

    user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
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

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user.id, user.role);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Get all users (this might be an admin-only route in a real-world application)
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password'); // Exclude password from the result
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Get user by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Update user by ID
router.put('/:id', [
  body('name').optional().notEmpty().withMessage('Name is required'),
  body('email').optional().isEmail().withMessage('Valid email is required'),
  body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, password } = req.body;

  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      const hashedPassword = await hashPassword(password);
      user.password = hashedPassword;
    }

    await user.save();

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Delete user by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send('User not found');
    }

    await User.deleteOne({ _id: req.params.id });

    res.status(204).send(); // 204 No Content response for successful delete
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

export default router;
