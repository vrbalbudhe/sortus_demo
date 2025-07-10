import express from 'express';
import { getUserByEmail } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/get/email/:email", getUserByEmail)

export default router;