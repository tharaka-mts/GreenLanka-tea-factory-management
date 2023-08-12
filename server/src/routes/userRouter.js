import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

import { userModel } from "../models/user.js"

const router = express.Router();

router.post('/register', async(req, res) => {
    const { firstname, lastname, username, type, email, address, mobile, password } = req.body;
    const user = await userModel.findOne({ mobile });

    if(user){
        return res.json({ message: `Can't use this mobile number, Already used in username: ${user.username}!` });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({ firstname, lastname, username, type, email, address, mobile, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User registered successfully!"});
});

export { router as userRouter };