const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { userModel } = require('../models/user');
const { authenticateUser } = require('../middleware/auth'); // Implement authentication middleware

// Create a route for changing the password
router.post('/changePassword', authenticateUser, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user._id; // Assuming you have user information in the request object

    // Retrieve the user from the database
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the current password with the stored password
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    // Hash the new password and update it in the database
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    return res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Password change error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;