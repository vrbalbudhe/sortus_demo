import express from 'express';
import { register, login, googleSignIn, checkAuthStatus, logout } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post("/logout", logout)
router.post('/google-signin', googleSignIn);
router.get("/checkAuth", checkAuthStatus)

export default router;