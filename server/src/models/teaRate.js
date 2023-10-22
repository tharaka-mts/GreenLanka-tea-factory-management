import { Schema, model } from 'mongoose';

const teaRateSchema = new Schema({
    rate: {type: String, required: true},
    modifydate: {type: Date, required: true},
});

export const teaRateModel = model('teaRate', teaRateSchema);