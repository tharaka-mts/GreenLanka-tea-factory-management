import express from 'express';
import { attendanceModel } from '../models/attendance.js';

const router = express.Router();

// Fetch all attendance details
router.get('/getAttendance', (req, res) => {
    attendanceModel.find()
        .then(attendance => {
            res.json(attendance);
        })
        .catch(err => {
            console.error('Error fetching attendance:', err);
            res.status(500).json({ error: 'An error occurred while fetching attendance.' });
        });
});

// Create new attendance record
router.post('/createAttendance', (req, res) => {
    const { username } = req.body;

    // Get current date and time
    const LocalDateandTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo', format: 'yyyy-MM-dd HH:mm:ss' });
    const DateandTime = new Date(LocalDateandTime);

    // Format currentDate (YYYY-MM-DD)
    const year = DateandTime.getFullYear();
    const month = String(DateandTime.getMonth() + 1).padStart(2, '0');
    const day = String(DateandTime.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;

    // Format currentTime (YYYY-MM-DD hh:mm:ss)
    const hours = String(DateandTime.getHours()).padStart(2, '0');
    const minutes = String(DateandTime.getMinutes()).padStart(2, '0');
    const seconds = String(DateandTime.getSeconds()).padStart(2, '0');
    const currentTime = `${currentDate} ${hours}:${minutes}:${seconds}`;

    const newAttendance = new attendanceModel({
        username,
        date: currentDate,
        inTime: currentTime,
        outTime: currentTime, // Empty string for outTime
    });

    newAttendance.save()
        .then(savedAttendance => {
            res.status(201).json(savedAttendance);
        })
        .catch(err => {
            console.error('Error creating attendance:', err);
            res.status(500).json({ error: 'An error occurred while creating attendance.' });
        });
});

// Update outTime for an existing attendance record
router.put('/updateAttendance/:id', (req, res) => {
    const { id } = req.params;

    // Get current date and time
    const LocalDateandTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo', format: 'yyyy-MM-dd HH:mm:ss' });
    const DateandTime = new Date(LocalDateandTime);

    // Format currentDate (YYYY-MM-DD)
    const year = DateandTime.getFullYear();
    const month = String(DateandTime.getMonth() + 1).padStart(2, '0');
    const day = String(DateandTime.getDate()).padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;

    // Format currentTime (YYYY-MM-DD hh:mm:ss)
    const hours = String(DateandTime.getHours()).padStart(2, '0');
    const minutes = String(DateandTime.getMinutes()).padStart(2, '0');
    const seconds = String(DateandTime.getSeconds()).padStart(2, '0');
    const currentTime = `${currentDate} ${hours}:${minutes}:${seconds}`;

    attendanceModel.findByIdAndUpdate(id, { outTime: currentTime }, { new: true })
        .then(updatedAttendance => {
            if (!updatedAttendance) {
                return res.status(404).json({ error: 'Attendance record not found.' });
            }
            res.json(updatedAttendance);
        })
        .catch(err => {
            console.error('Error updating attendance:', err);
            res.status(500).json({ error: 'An error occurred while updating attendance.' });
        });
});

export { router as getAttendanceRouter };