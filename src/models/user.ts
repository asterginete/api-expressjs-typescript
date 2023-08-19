export interface User {
  id: number;
  name: string;
  email: string;
  password: string; // hashed password
  role: 'user' | 'admin';
}