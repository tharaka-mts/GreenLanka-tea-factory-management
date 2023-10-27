import mongoose from 'mongoose';

const expensesSchema = new mongoose.Schema({
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
    fuelInside: {
        type: Number,
        default: 0,
    },
    fuelOutside: {
        type: Number,
        default: 0,
    },
    transportInside: {
        type: Number,
        default: 0,
    },
    transportOutside: {
        type: Number,
        default: 0,
    },
});

export const Expenses = mongoose.model('Expenses', expensesSchema);
