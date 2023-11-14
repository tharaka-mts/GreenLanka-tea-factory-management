import { userSalaryModel } from '../models/userSalary.js';
import express from "express";

const router = express.Router();


router.get('/getRoles/:role', async (req, res) => {
    const role = req.params.role;
  try {

    // You can replace this with actual roles from your database or a hardcoded array
    // const roles = ['employee', 'manager', 'supervisor', 'tea plucker'];
    const user = await userSalaryModel.findOne({role});

    res.json(user)
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


router.patch('/addSalaryDetails/:role', async (req, res) => {
  try {
    const role = req.params.role;
    const { basic, emDailyRate, teaLeavesSalary, bonusPercentage, overtimeSalary } = req.body;

    // Find the salary details for employees with the provided role
    const matchingSalaries = await userSalaryModel.find({ role });

    if (matchingSalaries.length === 0) {
      return res.status(404).json({ error: `Salary details for role ${role} not found` });
    }

    // Update salary details for all matching employees
    for (const existingSalary of matchingSalaries) {
      if (basic) existingSalary.basic = basic;
      if (emDailyRate) existingSalary.emDailRyate = emDailyRate;
      if (teaLeavesSalary) existingSalary.teaLeavesSalary = teaLeavesSalary;
      if (bonusPercentage) existingSalary.bonusPercentage = bonusPercentage;
      if (overtimeSalary) existingSalary.overtimeSalary = overtimeSalary;

      await existingSalary.save();
    }

    res.status(200).json({ message: `Salary details for role ${role} updated successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export { router as AddSalaryDetailsRouter };
