import { Schema, model } from 'mongoose';

const empProductionSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref:'users', required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    supervisor: {type: String, required: true},
    date: {type: Date, required: true},
    time: {type: String, required: true},
    weight: {type: Number, required: true},
});

export const empProductionModel = model('empProduction', empProductionSchema);