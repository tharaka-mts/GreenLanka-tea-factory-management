// src/routes/qualityCheckRouter.js

import express from 'express';
import { FinalProduction } from '../models/finalproduction.js'; // Import the QualityCheck model

const finalProductionRouter = express.Router();

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
finalProductionRouter.post('/createFinalProduction', async (req, res) => {
    try {
        const { grade, finalWeight } = req.body;

        const newFinalProduction= new FinalProduction({
            grade,
            finalWeight,
        });

        const savedFinalProduction = await newFinalProduction.save();
        res.json(savedFinalProduction);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

export { finalProductionRouter };



