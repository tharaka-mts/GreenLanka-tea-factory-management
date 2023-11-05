import { Schema, model } from "mongoose";

const salarySchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref:'users', required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    date: {type: Date, required: true},
    basic: {type: Number, required: true},
    bonus: {type: Number, required: true},
    deduction: {type: Number, required: true},
    finalSalary: {type: Number, required: true},
});

export const salaryModel = model('salary', salarySchema);