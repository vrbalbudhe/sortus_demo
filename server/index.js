import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet'
dotenv.config();

import { initializeFirebaseAdmin } from './config/firebase.js';
import { connectToDatabase } from './config/database.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { logger } from './utils/logger.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 8000;

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "https://sortus-demo-a96w.vercel.app",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: true
};

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/product', productRoutes);
app.use(errorHandler);

const StartConnection = async () => {
  app.listen(PORT, async () => {
    initializeFirebaseAdmin();
    await connectToDatabase();
    logger.info(`Server running on port ${PORT}`);
  });
}

StartConnection();