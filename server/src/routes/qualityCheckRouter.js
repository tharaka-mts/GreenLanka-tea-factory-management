// src/routes/qualityCheckRouter.js

import express from 'express';
import { QualityCheck } from '../models/qualitycheck.js'; // Import the QualityCheck model

const qualityCheckRouter = express.Router();

// Get all tea rate data
// teaRateRouter.get('/getTeaRate', async (req, res) => {
//     try {
//         const qualityCheck = await QualityCheck.find(); // Use find to get all entries
//         if (qualityCheck.length === 0) {
//             res.status(404).json({ message: 'No details found' });
//         } else {
//             res.json(teaRates);
//         }
//     } catch (err) {
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// Create new tea rate
qualityCheckRouter.post('/createQualityCheck', async (req, res) => {
    try {
        const { sName, newWeight } = req.body;

        const newQualityCheck = new QualityCheck({
            sName,
            newWeight,
        });

        const savedQualityCheck = await newQualityCheck.save();
        res.json(savedQualityCheck);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

export { qualityCheckRouter };