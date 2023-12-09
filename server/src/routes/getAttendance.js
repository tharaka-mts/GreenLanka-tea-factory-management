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

// Update the date, inTime, and outTime of entries to yesterday and today
router.put('/updateAttendance', (req, res) => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0]; // Get yesterday's date in YYYY-MM-DD format

    attendanceModel.find()
        .then(attendance => {
            attendance.forEach((entry, index) => {
                if (index < 2) {
                    // Update the date, inTime, and outTime of the first two entries to yesterday
                    entry.date = yesterday;
                    entry.inTime = yesterday + ' ' + entry.inTime.split(' ')[1]; // Preserve the time, update the date
                    entry.outTime = yesterday + ' ' + entry.outTime.split(' ')[1]; // Preserve the time, update the date
                } else {
                    // Update the date, inTime, and outTime of the rest of the entries to today
                    entry.date = today;
                    entry.inTime = today + ' ' + entry.inTime.split(' ')[1]; // Preserve the time, update the date
                    entry.outTime = today + ' ' + entry.outTime.split(' ')[1]; // Preserve the time, update the date
                }
            });

            // Save the updated entries
            return Promise.all(attendance.map(entry => entry.save()));
        })
        .then(updatedAttendance => {
            res.json(updatedAttendance);
        })
        .catch(err => {
            console.error('Error updating attendance:', err);
            res.status(500).json({ error: 'An error occurred while updating attendance.' });
        });
});

export { router as getAttendanceRouter };