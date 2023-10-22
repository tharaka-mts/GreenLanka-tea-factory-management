import { Schema, model } from 'mongoose';

const moneyFlowSchema = new Schema({
    date: {type: Date, required: true},
    time: {type: String, required: true},
    type: {type: String, required: true},
    amount: {type: Number, required: true},
    username: {type: String, required: true},
    description: {type: String, required: true},
});

export const moneyFlowModel = model('moneyFlow', moneyFlowSchema);