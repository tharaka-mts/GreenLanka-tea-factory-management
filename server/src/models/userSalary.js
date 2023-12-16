import { Schema, model } from "mongoose";

const userSalarySchema = new Schema({
  role: { type: String, required: true }, // Role of the user
  emDailyRate: { type: Number }, // For employees
  teaLeavesSalary: { type: Number },
  overtimeSalary: { type: Number },
  basic: { type: Number },
  bonusPercentage: { type: Number },
});

export const userSalaryModel = model("userSalary", userSalarySchema);
