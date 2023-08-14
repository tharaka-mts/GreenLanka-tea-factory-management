import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

import { userModel } from "../models/user.js"

const router = express.Router();

// Define a route for user registration
router.post('/register', async (req, res) => {
    try {
        // Extract user registration data from the request body
        const { firstname, lastname, username, type, email, address, mobile, password } = req.body;

        // Check if a user with the given mobile number already exists
        const user = await userModel.findOne({ mobile });

        // If a user with the mobile number already exists, provide an error message
        if (user) {
            return res.json({ message: `Can't use this mobile number, Already used in username: ${user.username}!` });
        }

        // Hash the user's password using bcrypt with a salt factor of 10
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user object with the hashed password
        const newUser = new userModel({
            firstname,
            lastname,
            username,
            type,
            email,
            address,
            mobile,
            password: hashedPassword
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with a success message upon successful registration
        res.json({ message: "User registered successfully!" });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Define a route for user login
router.post('/login', async (req, res) => {
    const { loginField, password } = req.body;
  
    try {
      // Find user by mobile or username
      const user = await userModel.findOne({
        $or: [{ mobile: loginField }, { username: loginField }],
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate and sign JWT
      const payload = { userId: user._id };
      const token = jwt.sign(payload, 'greenLanka', { expiresIn: '1h' });
  
      res.json({ message: 'Login successful', token, userID: user._id, type: user.type });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

export { router as userRouter };