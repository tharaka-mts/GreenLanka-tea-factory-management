// src/routes/expenses.js

import express from 'express';
import { Expenses } from '../models/expenses.js'; // Import the Expenses model

const expensesRouter = express.Router();


// Get all expenses data
expensesRouter.get('/getExpenses', async (req, res) => {
    try {
        const expenses = await Expenses.find(); // Find all expenses as an array
        if (!expenses || expenses.length === 0) {
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
        const { 
            year,
            month,
            wMachine,
            rMachine,
            dMachine,
            electricity,
            fuel,
            transport,
        } = req.body;

        const newExpenses = new Expenses({
            year,
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
