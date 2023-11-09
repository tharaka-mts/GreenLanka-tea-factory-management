import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from 'path';
// import fs from 'fs';
import QRCode from 'qrcode';

import { userModel } from '../models/user.js';

const router = express.Router();

// Set up multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/userImages/'); // Define the directory where uploaded images will be stored
  },
  filename: function (req, file, cb) {
    const username = req.body.username; // Get the username from the request body
    const fileExtension = path.extname(file.originalname);

    // Use the username and a timestamp to create a unique filename
    const newFilename = `${username}-${Date.now()}${fileExtension}`;
    cb(null, newFilename);
  },
});

const upload = multer({ storage: storage });

// Define a route for user registration with image upload
router.post('/register', upload.single('image'), async (req, res) => {
  try {
    // Extract user registration data from the request body
    const {
      firstname,
      lastname,
      username,
      nic,
      type,
      email,
      address,
      mobile,
      password,
    } = req.body;

    // Access the uploaded image file using req.file
    const uploadedImage = req.file;
    if (!uploadedImage) {
      return res.status(400).json({ message: 'No image uploaded.' });
    }

    // Check if a user with the given mobile number already exists
    const user = await userModel.findOne({ mobile });

    // If a user with the mobile number already exists, provide an error message
    if (user) {
      return res.json({
        message: `Can't use this mobile number, Already used in username: ${user.username}!`,
      });
    }

    // Generate the QR code for the username
    await QRCode.toFile(`public/qrcodes/${username}.png`, username, {
      width: 800,
      margin: 2,
    });

    // Hash the user's password using bcrypt with a salt factor of 10
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object with the hashed password and image path
    const newUser = new userModel({
      firstname,
      lastname,
      username,
      image: uploadedImage.path, // Save the path to the uploaded image in the database
      nic,
      type,
      email,
      address,
      mobile,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Respond with a success message upon successful registration
    res.json({ message: 'User registered successfully!' });
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