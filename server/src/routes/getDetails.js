import express from 'express';
import { userModel } from '../models/user.js';

const router = express.Router();

// Route to get user details by ID
router.get('/user/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Exclude sensitive information like password from the response
    const userWithoutPassword = {
      _id: user._id,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      type: user.type,
      email: user.email,
      address: user.address,
      mobile: user.mobile,
    };

    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Error getting user details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export { router as getDetailsRouter };
