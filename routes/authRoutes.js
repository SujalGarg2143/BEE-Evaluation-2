import express from "express";
import { loginUser, signupUser } from "../controllers/authController.js";

const router = express.Router();

router.use((req, res, next) => {
    console.log(`Router level middle ware used on auth routes`);
    next();
})

// Define Login & Signup Routes
router.post("/login", loginUser);
router.post("/signup", signupUser);

export default router;
