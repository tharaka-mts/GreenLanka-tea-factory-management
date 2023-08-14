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

router.get('/users/:id', async (req, res) => {
    try {
      const user = await userModel.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error('Error fetching user details:', error);
      res.status(500).json({ message: 'Error fetching user details' });
    }
  });

  router.put('/users/:id', async (req, res) => {
    try {
      const { firstname, lastname, username, type, email, address, mobile, password } = req.body;
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const updatedUser = await userModel.findByIdAndUpdate(
        req.params.id,
        {
          firstname,
          lastname,
          username,
          type,
          email,
          address,
          mobile,
          password: hashedPassword,
        },
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User updated successfully!', user: updatedUser });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Error updating user' });
    }
  });
  
  router.delete('/users/:id', async (req, res) => {
    try {
      const deletedUser = await userModel.findByIdAndDelete(req.params.id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User deleted successfully!' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Error deleting user' });
    }
  });


export { router as userRouter };