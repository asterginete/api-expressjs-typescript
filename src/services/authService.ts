import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/userSchema';

class AuthService {
  async register(data: any) {
    const userExists = await User.findOne({ email: data.email });
    if (userExists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = new User({ ...data, password: hashedPassword });
    await user.save();

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || 'defaultsecret', { expiresIn: '1h' });
    return { user, token };
  }

  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || 'defaultsecret', { expiresIn: '1h' });
    return { user, token };
  }
}

export default new AuthService();
