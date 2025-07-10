import Joi from 'joi';

export const registerSchema = Joi.object({
  firebaseUid: Joi.string().required(),
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid('user', 'admin').default('user'),
});

export const googleSignupSchema = Joi.object({
  firebaseUid: Joi.string().required(),
  email: Joi.string().email().required(),
  displayName: Joi.string().allow('', null),
});

export const completeProfileSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  role: Joi.string().valid('user', 'admin').default('user'),
});

export const updateProfileSchema = Joi.object({
  username: Joi.string().min(3).max(30),
  role: Joi.string().valid('user', 'admin'),
}).min(1);