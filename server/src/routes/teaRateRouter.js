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
            res.json(teaRates);
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

teaRateRouter.get('/getLatestTeaRates', async (req, res) => {
    try {
        // Retrieve all tea rates sorted by _id in descending order
        const allTeaRates = await TeaRate.find().sort({ _id: -1 });

        if (allTeaRates.length === 0) {
            res.status(404).json({ message: 'No tea rates found' });
        } else {
            // Find the latest accepted or request tea rate
            const latestTeaRate = allTeaRates.find(teaRate => teaRate.status === 'Accepted' || teaRate.status === 'Request');

            // If no accepted or request tea rate is found, return an empty array
            const responseArray = latestTeaRate ? [latestTeaRate] : [];

            res.json(responseArray);
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Get all tea rate data
teaRateRouter.get('/getLatestAcceptedTeaRate', async (req, res) => {
    try {
        const latestAcceptedTeaRates = await TeaRate.find({ status: "Accepted" }).sort({ _id: -1 }).limit(1);

        if (latestAcceptedTeaRates.length === 0) {
            res.status(404).json({ message: 'No latest accepted tea rate found' });
        } else {
            res.json(latestAcceptedTeaRates);
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
