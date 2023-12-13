// src/routes/teaRateRouter.js

import express from 'express';
import { TeaRate } from '../models/tearate.js'; // Import the TeaRate model

const teaRateRouter = express.Router();

let acceptedOrDeclined = false;


// Get all tea rate data
teaRateRouter.get('/getTeaRate', async (req, res) => {
    try {
        const teaRates = await TeaRate.find().sort({ _id: -1 }).limit(1); // Retrieve the latest added entry
        if (teaRates.length === 0) {
            res.status(404).json({ message: 'No tea rates found' });
        } else {
            res.json({
                teaRate: teaRates[0],
                acceptedOrDeclined: acceptedOrDeclined
            });
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Create new tea rate
teaRateRouter.post('/createTeaRate', async (req, res) => {
    try {
        const { rateForRawTeaLeaves, rateForGradeAProduction, rateForGradeBProduction, rateForGradeCProduction, rateForGradeDProduction, status, comment } = req.body;

        const newTeaRate = new TeaRate({
            rateForRawTeaLeaves,
            rateForGradeAProduction,
            rateForGradeBProduction,
            rateForGradeCProduction,
            rateForGradeDProduction,
            status,
            comment,
        });

        acceptedOrDeclined = false;

        // Save the new tea rate
        const savedTeaRate = await newTeaRate.save();
        res.json(savedTeaRate);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Update tea rate status to "Accepted"
teaRateRouter.put('/acceptTeaRate', async (req, res) => {
    try {
        if (!acceptedOrDeclined) {
            const latestTeaRate = await TeaRate.findOne().sort({ _id: -1 }).limit(1);

            if (!latestTeaRate) {
                return res.status(404).json({ message: 'No tea rates found' });
            }

            latestTeaRate.status = 'Accepted';
            await latestTeaRate.save();

            acceptedOrDeclined = true; // Set the flag to true to indicate acceptance

            res.json({ message: 'Tea rates were Accepted' });
        // } else {
        //     res.status(403).json({ message: 'Tea rates were already Accepted or Declined' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Update tea rate status to "Declined" and store comment
teaRateRouter.put('/declineTeaRate', async (req, res) => {
    try {
        if (!acceptedOrDeclined) {
            const latestTeaRate = await TeaRate.findOne().sort({ _id: -1 }).limit(1);

            if (!latestTeaRate) {
                return res.status(404).json({ message: 'No tea rates found' });
            }

            latestTeaRate.status = 'Declined';
            latestTeaRate.comment = req.body.comment;
            await latestTeaRate.save();

            acceptedOrDeclined = true; // Set the flag to true to indicate decline

            res.json({ message: 'Tea rates were Declined' });
        // } else {
        //     res.status(403).json({ message: 'Tea rates were already Accepted or Declined' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export { teaRateRouter };
