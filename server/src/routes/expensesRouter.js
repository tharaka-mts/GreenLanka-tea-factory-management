// src/routes/expenses.js

import express from 'express';
import { Expenses } from '../models/expenses.js'; // Import the Expenses model

const expensesRouter = express.Router();

// Get all expenses data
expensesRouter.get('/getExpenses', async (req, res) => {
    try {
        const expenses = await Expenses.find(); // Use find to get all entries
        if (expenses.length === 0) {
            res.status(404).json({ message: 'No tea rates found' });
        } else {
            res.json(expenses);
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Create new expenses
expensesRouter.post('/newExpenses', async (req, res) => {
    try {
        const { month,
            wMachine,
            rMachine,
            dMachine,
            electricity,
            fuelInside,
            fuelOutside,
            transportInside,
            transportOutside,
        } = req.body;

        console.log('Received month:', month);

        const newExpenses = new Expenses({
            month,
            wMachine,
            rMachine,
            dMachine,
            electricity,
            fuelInside,
            fuelOutside,
            transportInside,
            transportOutside,
        });

        const savedExpenses = await newExpenses.save();
        res.json(savedExpenses);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

export { expensesRouter };
