import express from 'express';
import { format } from 'date-fns';

import { userModel } from '../models/user.js';
import { attendanceModel } from '../models/attendance.js';

const router = express.Router();

// Route to send user attendance by ID
router.post('/add', async (req, res) => {
    const { userId } = req.body;

  try {
    // Retrieve user details based on userId
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get current date and time

    const date = new Date();
    const currentDate = format(date, 'yyyy-MM-dd');
    const currentTime = date.toLocaleTimeString('en-US', { hour12: false });

    // Check if attendance data already exists for the given date
    const attendance = await attendanceModel.findOne({ userId, date: currentDate });
    if (attendance) {
        await attendanceModel.findOneAndUpdate({userId, date: currentDate}, {outTime: currentTime});
        return res.status(400).json({ message: 'Out Time updated successfully' });
    }

    // Create attendance data
    const newAttendance = new attendanceModel({
      userId,
      firstname: user.firstname,
      lastname: user.lastname,
      date: currentDate,
      inTime: currentTime,
      outTime: currentTime,
    });

    await newAttendance.save();

    res.json({ message: 'Attendance data added successfully' });
  } catch (error) {
    console.error('Attendance data addition error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export { router as userAttendanceRouter };