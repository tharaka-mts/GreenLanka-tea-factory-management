import express from "express";
import { format } from "date-fns";

import { userModel } from "../models/user.js";
import { empProductionModel } from "../models/employeeProduction.js";
import { teamsModel } from "../models/teams.js";

const router = express.Router();

// Route for adding employee production data
router.post("/add", async (req, res) => {
    try {
        const { username, weight } = req.body;
        const user = await userModel.findOne({ username });
        // const supervisor = await teamsModel.findOne({ 'team.userId': user._id });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Get current date and time

        const date = new Date();
        const currentDate = format(date, "yyyy-MM-dd");
        const currentTime = date.toLocaleTimeString("en-US", { hour12: false });

        // Create employee production data
        const newEmpProduction = new empProductionModel({
            userId: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            supervisor: " ",
            date: currentDate,
            time: currentTime,
            weight: weight,
        });

        await newEmpProduction.save();

        res.json({ message: "Employee production data added successfully!" });
    } catch (error) { 
        res.status(500).json({ message: "Internal server error" });
    }
});

export { router as empProductionRouter };
