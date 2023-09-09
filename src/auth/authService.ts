import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const SECRET_KEY = 'secret-key'; // This should be stored securely, e.g., in environment variables.

export const generateToken = (userId: number, role: string): string => {
  return jwt.sign({ userId, role }, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, SECRET_KEY);
};

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
