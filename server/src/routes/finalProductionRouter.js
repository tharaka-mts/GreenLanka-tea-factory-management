// src/routes/qualityCheckRouter.js
import express from 'express';
import { FinalProduction } from '../models/finalProduction.js'; // Import the QualityCheck model

const finalProductionRouter = express.Router();

// Get final production based on year and month from path variables
finalProductionRouter.get('/getFinalProduction/:year/:month', async (req, res) => {
    try {
        const { year, month } = req.params;

        // Build a query object to filter by year and month if they are provided
        const query = {};
        if (year) query.year = year;
        if (month) query.month = month;

        const finalproduction = await FinalProduction.find(query);

        if (finalproduction.length === 0) {
            res.status(404).json({ message: 'No details found' });
        } else {
            res.json(finalproduction);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get all production
finalProductionRouter.get('/getFinalProduction', async (req, res) => {
    try {
        const { year, month } = req.query;
        const finalproduction = await FinalProduction.find(); // Use find to get all entries
        if (finalproduction.length === 0) {
            res.status(404).json({ message: 'No details found' });
        } else {
            res.json(finalproduction);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Create new production
finalProductionRouter.post('/createFinalProduction', async (req, res) => {
    try {
        const { grade, finalWeight } = req.body;

        const newFinalProduction = new FinalProduction({
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
