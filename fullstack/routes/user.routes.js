
import express from "express";
import {
    registerUser,
    verifyUser,
    login,
    getMe,
    LogoutUser,
    forgotPassword,
    resetPassword
} from "../controller/user.controller.js";
import { isloggedIn } from "../middleware/auth.middleware.js";

const router = express.Router();

// REGISTER
router.post("/register", registerUser);

// EMAIL VERIFY
router.get("/verify/:token", verifyUser);

// LOGIN 
router.post("/login", login);

// getME
router.get("/profile",isloggedIn ,getMe); // isloggedIn is a middleware 

// logout
router.post("/logout",isloggedIn ,LogoutUser); // isloggedIn is a middleware

//Forgot Password
router.post("/forget",forgotPassword);

// resetPassword
router.post("/reset/:token",resetPassword);



export default router;
