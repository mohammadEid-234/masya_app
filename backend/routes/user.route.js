import express from 'express';
import { loginUser, registerUser } from '../controller/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router()

router.get("/profile",protect,async(req,res)=>{
    res.status(200).send("Authorized for profile page");
})
router.post("/register",registerUser)
router.post("/login",loginUser)

export default router;