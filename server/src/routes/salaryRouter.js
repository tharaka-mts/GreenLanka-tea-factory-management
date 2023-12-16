import express from "express";
import { salaryModel } from "../models/salary.js";
import { userModel } from "../models/user.js";
import { format } from "date-fns";
import { userSalaryModel } from "../models/userSalary.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { username } = req.body;

    const user = await userModel.findOne({ username: username });
    // const userTeaWeight = await empProductionModel.findOne({ userId: user._id });

    const date = new Date();
    const currentDate = format(date, "yyyy-MM-dd");

    if (!user) return res.status(404).json({ message: "User not found" });

    const role = user.type.toLowerCase();

    const salaryDetails = await userSalaryModel.findOne({ role: role });

    const overTimeSalary = salaryDetails.overtimeSalary === 0 ? 0 : 0;

    const finalSalary =
      salaryDetails.basic +
      overTimeSalary +
      salaryDetails.bonusPercentage +
      salaryDetails.teaLeavesSalary;

    const salary = new salaryModel({
      userId: user._id,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      date: currentDate,
      role: user.type,
      hoursWorked: 0,
      teaLeavesWeight: 0,
      emDailRyate: salaryDetails.emDailyRate,
      teaLeavesSalary: 0,
      overtimeSalary: overTimeSalary,
      basic: salaryDetails.basic,
      bonus: salaryDetails.bonusPercentage,
      finalSalary: finalSalary,
    });

    await salary.save();

    res.json({ message: "Salary added successfully!", salary: salary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/get/:role", async (req, res) => {
  try {
    const role = req.params.role;
    const users = await salaryModel.find({ role: role });

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

export { router as salaryRouter };
