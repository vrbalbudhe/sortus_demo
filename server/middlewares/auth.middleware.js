import admin from '../config/firebase.js';
import { AppError } from '../utils/AppError.js';

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('No authentication token provided', 401);
    }

    const token = authHeader.split(' ')[1];
    const decodedToken = await admin.auth().verifyIdToken(token);

    // Attach user info to request object
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email || ''
    };

    next();
  } catch (error) {
    next(new AppError('Authentication failed', 401));
  }
};