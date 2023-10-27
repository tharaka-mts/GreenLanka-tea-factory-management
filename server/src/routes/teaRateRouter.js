// src/routes/teaRateRouter.js

import express from 'express';

import { TeaRate } from '../models/tearate.js'; // Import the TeaRate model

const teaRateRouter = express.Router();



// Get all tea rate data
// teaRateRouter.get('/getTeaRate', async (req, res) => {
//     try {
//         const teaRates = await TeaRate.find(); // Use find to get all entries
//         if (teaRates.length === 0) {
//             res.status(404).json({ message: 'No tea rates found' });
//         } else {
//             res.json(teaRates);
//         }
//     } catch (err) {
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// Create new tea rate
teaRateRouter.post('/createTeaRate', async (req, res) => {
    try {
        const { rateForRawTeaLeaves, rateForGradeAProduction, rateForGradeBProduction, rateForGradeCProduction, rateForGradeDProduction, status } = req.body;

        const newTeaRate = new TeaRate({
            rateForRawTeaLeaves,
            rateForGradeAProduction,
            rateForGradeBProduction,
            rateForGradeCProduction,
            rateForGradeDProduction,
            status,
            
        });

        const savedTeaRate = await newTeaRate.save();
        res.json(savedTeaRate);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

export { teaRateRouter };