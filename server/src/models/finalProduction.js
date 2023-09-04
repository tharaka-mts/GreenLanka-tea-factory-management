import { Schema, model } from 'mongoose';

const finalProductionSchema = new Schema({
    date: {type: Date, required: true},
    time: {type: String, required: true},
    grade: {type: String, required: true},
    weight: {type: Number, required: true},
});

export const finalProductionModel = model('finalProduction', finalProductionSchema);