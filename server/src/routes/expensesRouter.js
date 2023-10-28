// src/routes/expenses.js

import express from 'express';
import { Expenses } from '../models/expenses.js'; // Import the Expenses model

const expensesRouter = express.Router();


// Get all expenses data
expensesRouter.get('/getExpenses', async (req, res) => {
    try {
        const expenses = await Expenses
        .findOne()  // Find a single document
            .sort({ _id: -1 }) // Sort by updatedAt in descending order (most recent first)
            .select('-_id month wMachine rMachine dMachine electricity fuel transport'); // Select only the desired fields
            if (!expenses) {
                res.status(404).json({ message: 'No expenses found' });
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
            fuel,
            transport,
        } = req.body;

        const newExpenses = new Expenses({
            month,
            wMachine,
            rMachine,
            dMachine,
            electricity,
            fuel,
            transport,
        });

        const savedExpenses = await newExpenses.save();
        res.json(savedExpenses);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

export { expensesRouter };
