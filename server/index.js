import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
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

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: `${process.env.CLIENT_ORIGIN || "https://sortus-demo-a96w-vrbalbudhes-projects.vercel.app/"}`,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposedHeaders: ['Content-Type', 'Authorization']
}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", `${process.env.CLIENT_ORIGIN}`);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

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