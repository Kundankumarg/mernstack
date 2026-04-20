import express from 'express'
import { registerUser } from '../controller/user.controller.js';

const router = express.Router()

router.get("/register",registerUser)

export default router; // ye export router ko index.js file may import karegay