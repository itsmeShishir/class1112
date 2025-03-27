import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel.js';

export const userMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.SECURE);
    req.user = await UserModel.findById(decoded.userId);
    next();
  } catch (err) {
    res.status(403).json({ message: 'Forbidden' });
  }
};
