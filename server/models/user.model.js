import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firebaseUid: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['user', 'individual', 'industry', 'institute', 'logistic', 'admin'],
    default: 'user',
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
    trim: true,
  },
  profileComplete: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});

export const User = mongoose.model('User', userSchema);