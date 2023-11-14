import { Schema, model } from "mongoose";

const userWeightSchema = new Schema({
   
    date: { type: Date, required: true }, // Role of the user
    username: { type: String }, // For employees
    teaLeavesSalary:{type: Number},
    
});

export const userWeightModel = model('weight', userWeightSchema);