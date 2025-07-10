import { AppError } from '../utils/AppError.js';
import { logger } from '../utils/logger.js';

export const errorHandler = (err, req, res, next) => {
  logger.error(err);

  // Check if error is an instance of AppError (operational error)
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  }

  // For unexpected errors, don't leak error details in production
  return res.status(500).json({
    status: 'error',
    message: process.env.NODE_ENV === 'production' ? 'Something went wrong' : err.message
  });
};