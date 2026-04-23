
import express from "express";
import {
    registerUser,
    verifyUser,
    login
} from "../controller/user.controller.js";

const router = express.Router();

// REGISTER
router.post("/register", registerUser);

// EMAIL VERIFY
router.get("/verify/:token", verifyUser);

// LOGIN 
router.post("/login", login);

export default router;
