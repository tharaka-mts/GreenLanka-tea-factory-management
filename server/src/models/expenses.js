import mongoose from 'mongoose';


const expensesSchema = new mongoose.Schema({
    year: {
        type: String,
    },
    month: {
        type: String,
    },
    wMachine: {
        type: Number,
        default: 0,
    },
    rMachine: {
        type: Number,
        default: 0,
    },
    dMachine: {
        type: Number,
        default: 0,
    },
    electricity: {
        type: Number,
        default: 0,
    },
    fuel: {
        type: Number,
        default: 0,
    },
    transport: {
        type: Number,
        default: 0,
    },
});

export const Expenses = mongoose.model('Expenses', expensesSchema);
