import { Schema, model } from 'mongoose';

const supProductionSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref:'users', required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    date: {type: Date, required: true},
    weight: {type: Number, required: true},
    comment: {type: String, required: true},
});

export const supProductionModel = model('supProduction', supProductionSchema);