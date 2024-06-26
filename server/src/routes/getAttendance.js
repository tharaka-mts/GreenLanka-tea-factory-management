// import express from 'express';
// import { attendanceModel } from '../models/attendance.js';

// const router = express.Router();

// // Fetch all attendance details
// router.get('/getAttendance', (req, res) => {
//     attendanceModel.find()
//     .then(attendance => {
//         res.json(attendance);
//     })
//     .catch(err => {
//         console.error('Error fetching attendance:', err);
//         res.status(500).json({ error: 'An error occurred while fetching attendance.' });
//     });
// });

// // Update the date, inTime, and outTime of entries to yesterday and today
// router.put('/updateAttendance', (req, res) => {
//     const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
//     const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0]; // Get yesterday's date in YYYY-MM-DD format

//     attendanceModel.find()
//         .then(attendance => {
//             attendance.forEach((entry, index) => {
//                 if (index < 2) {
//                     // Update the date, inTime, and outTime of the first two entries to yesterday
//                     entry.date = yesterday;
//                     entry.inTime = yesterday + ' ' + entry.inTime.split(' ')[1]; // Preserve the time, update the date
//                     entry.outTime = yesterday + ' ' + entry.outTime.split(' ')[1]; // Preserve the time, update the date
//                 } else {
//                     // Update the date, inTime, and outTime of the rest of the entries to today
//                     entry.date = today;
//                     entry.inTime = today + ' ' + entry.inTime.split(' ')[1]; // Preserve the time, update the date
//                     entry.outTime = today + ' ' + entry.outTime.split(' ')[1]; // Preserve the time, update the date
//                 }
//             });

//             // Save the updated entries
//             return Promise.all(attendance.map(entry => entry.save()));
//         })
//         .then(updatedAttendance => {
//             res.json(updatedAttendance);
//         })
//         .catch(err => {
//             console.error('Error updating attendance:', err);
//             res.status(500).json({ error: 'An error occurred while updating attendance.' });
//         });
// });

// export { router as getAttendanceRouter };


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