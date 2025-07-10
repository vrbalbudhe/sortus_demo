import admin from 'firebase-admin';
import { logger } from '../utils/logger.js';

export const initializeFirebaseAdmin = () => {
  try {
    const serviceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT_KEY
    );
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });

    logger.info('Firebase Admin SDK initialized successfully');
  } catch (error) {
    logger.error('Error initializing Firebase Admin SDK:', error);
    process.exit(1);
  }
};

export default admin;