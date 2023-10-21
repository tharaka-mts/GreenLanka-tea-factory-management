import express from "express";
import { format } from "date-fns";

import { empProductionModel } from "../models/employeeProduction.js";
import { teamsModel } from "../models/teams.js";
import { supProductionModel } from "../models/supervisorProduction.js";

const router = express.Router();

// Route for adding supervisor production data

router.post("/add", async (req, res) => {
    try {
        const { id } = req.body;
        const supTeam = await teamsModel.findOne({ supId: id });

        const supweight = 0;

        // Get current date and time
        const date = new Date();
        const currentDate = format(date, "yyyy-MM-dd");

        // supTeam.team.map(async (member) => {
        //     const empweight = await empProductionModel.findOne({
        //         userId: member.userId
        //     });

        //     if (!empweight) {
        //         return res.status(404).json({ message: "Employee not found" });
        //     }

        //     if (empweight.weight !== null && empweight.weight !== undefined) {
        //         supweight += empweight.weight;
        //     }

        //     console.log(empweight.weight);
        // });

        // Create an array of promises, each fetching empweight for a member
        const empWeightPromises = supTeam.team.map(async (member) => {
            const empweight = await empProductionModel.findOne({
                userId: member.userId,
            });

            if (!empweight) {
                return res.status(404).json({ message: "Employee not found" });
            }

            if (empweight.weight !== null && empweight.weight !== undefined) {
                return empweight.weight;
            }

            return 0; // Default value if weight is null or undefined
        });

        // Use Promise.all to resolve all promises concurrently
        const empWeights = await Promise.all(empWeightPromises);

        // Now, empWeights contains an array of all empweight.weight values
        console.log(empWeights);

        // Create supervisor production data
        const newSupProduction = new supProductionModel({
            userId: supTeam.supId,
            firstname: supTeam.supFirstname,
            lastname: supTeam.supLastname,
            date: currentDate,
            weight: supweight,
            comment: "lol",
        });

        console.log(newSupProduction);

        await newSupProduction.save();

        res.json({ message: "Supervisor production data added successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

export { router as supProductionRouter };
