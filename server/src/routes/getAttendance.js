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

export { router as getAttendanceRouter };
