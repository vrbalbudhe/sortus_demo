import { User } from '../models/user.model.js';
import { AppError } from '../utils/AppError.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/*
 * @function   : checkAuthStatus
 * @author     : varun-balbudhe
 * @description: Returns the payload for checking the auth status by returning the payload
 * @payload    : 
 * {
 *    email
 *    role
 *    iat
 *    exp
 * } 
 * @warning: i have not taken the userid in the payload cause there will be two ids then one in the 
 *  atlas cluster and another in the firebase id so email will be the good option
 */
export const checkAuthStatus = async (req, res) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      message: "User is Not Authenticated",
      success: false,
    });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.email = payload?.email;
    req.role = payload?.role;

    return res.status(200).json({
      message: "User Info Fetched Successfully",
      payload,
    });
  } catch (error) {
    res.status(501).json({
      status: 'false',
      message: 'User Auth Status Checker Failed',
      error
    });
  }
}

/*
 * @function   : register
 * @parameters : firebaseUid, email, username, role, password 
 * @author     : varun-balbudhe
 * @description: Register a new user with email/password and Firebase UID
 */
export const register = async (req, res, next) => {
  const { firebaseUid, fullName, email, username, role, password, contactNo } = req.body;
  console.log(firebaseUid)
  console.log(fullName)
  console.log(email)
  console.log(username)
  console.log(role)
  console.log(password)
  console.log(contactNo)
  try {
    if (!firebaseUid || !fullName || !contactNo || !email || !username || !password) {
      return next(new AppError('All fields are required', 400));
    }

    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return next(new AppError('Email already in use', 400));
    }

    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) {
      return next(new AppError('Username already taken', 400));
    }

    const existingUserByFirebaseUid = await User.findOne({ firebaseUid });
    if (existingUserByFirebaseUid) {
      return next(new AppError('Firebase UID already registered', 400));
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      firebaseUid,
      email,
      fullName,
      username,
      contactNo,
      role: role || 'user',
      password: hashedPassword,
      profileComplete: true,
    });

    const userResponse = { ...newUser.toObject() };
    delete userResponse.password;

    res.status(201).json({
      status: 'success',
      message: 'User registered successfully',
      data: {
        user: userResponse,
      },
    });
  } catch (error) {
    res.status(501).json({
      status: 'error',
      message: 'User not registered',
      error: error.message || error,
    });
  }
};

/*
 * @function   : login
 * @parameters : email, password
 * @author     : varun-balbudhe
 * @description: Login user with email and password, return JWT token saved as a cookies
 */
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return next(new AppError('Email and password are required', 400));
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return next(new AppError('Invalid email or password', 401));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new AppError('Invalid email or password', 401));
    }

    const payload = {
      email: user?.email,
      role: user?.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '2d',
    });

    await res.append('Set-Cookie', `token=${token}; HttpOnly; Secure; SameSite=None; Max-Age=${2 * 24 * 60 * 60}; Partitioned`);

    const userResponse = { ...user.toObject() };
    delete userResponse.password;

    res.status(200).json({
      status: 'success',
      message: 'Login successful',
      data: {
        user: userResponse,
      },
    });
  } catch (error) {
    console.log(error)
    res.status(501).json({
      status: 'false',
      message: 'User Login Failed',
      error
    });
  }
};

/*
 * @function   : googleSignIn
 * @parameters : firebaseUid, email, displayName, photoURL
 * @author     : varun-balbudhe
 * @description: Handle Google OAuth sign-in, create user if doesn't exist
 */
export const googleSignIn = async (req, res, next) => {
  try {
    const { firebaseUid, email, displayName, photoURL } = req.body;

    if (!firebaseUid || !email) {
      return next(new AppError('Firebase UID and email are required', 400));
    }

    let user = await User.findOne({ firebaseUid });
    let isNewUser = false;

    if (!user) {
      const existingEmailUser = await User.findOne({ email });
      if (existingEmailUser) {
        return next(new AppError('Email already registered with different account', 400));
      }

      let username = displayName || email.split('@')[0];
      let usernameExists = await User.findOne({ username });
      let counter = 1;
      while (usernameExists) {
        username = `${displayName || email.split('@')[0]}${counter}`;
        usernameExists = await User.findOne({ username });
        counter++;
      }
      user = await User.create({
        firebaseUid,
        email,
        username,
        role: 'user',
        profileComplete: false,
        photoURL: photoURL || null,
        authProvider: 'google',
      });
      isNewUser = true;
    }

    const payload = {
      id: user._id,
      firebaseUid: user.firebaseUid,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '2d',
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 2 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      status: 'success',
      message: isNewUser ? 'Account created successfully' : 'Login successful',
      token,
      data: {
        user,
        isNewUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {
  await res.clearCookie("token");
  res.status(200).json({ message: 'Logged out successfully' });
};