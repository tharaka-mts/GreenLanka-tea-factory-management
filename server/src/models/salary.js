impo{rt  Schema, model } from "mongoose";

const salarySchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref:'users', required: true},
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    date: {type: Date, required: true},
    role: { type: String, required: true }, // Role of the user
    hoursWorked: { type: Number }, // For managers and supervisors
    teaLeavesWeight: { type: Number }, // For tea pluckers
    emDailRyate: { type: Number }, // For employees
    teaLeavesSalary:{type: Number},
    overtimeSalary:{type: Number},
    basic: {type: Number, required: true},
    bonus: {type: Number, required: true},
    finalSalary: {type: Number, required: true},
});

export const salaryModel = model('salary', salarySchema);