import express from "express";

import { userModel } from "../models/user.js";
import { teamsModel } from "../models/teams.js";

const router = express.Router();

// Route for adding a team

router.post("/add", async (req, res) => {
    try {
        const { username } = req.body;

        const supervisor = await userModel.findOne({ username });
        const team = await teamsModel.findOne({ supId: supervisor._id });

        if (!supervisor) {
            return res.status(404).json({ message: "Supervisor not found" });
        }

        if (team) {
            return res.status(404).json({ message: "Supervisor already added" });
        }

        // Create a new team
        const newTeam = new teamsModel({
            supId: supervisor._id,
            supFirstname: supervisor.firstname,
            supLastname: supervisor.lastname,
            team: [],
        });

        await newTeam.save();
        res.json({ message: "Supervisor added successfully!" });
    } catch (error) {
        console.error('Adding error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route for adding a team member

router.put('/update', async (req, res) => {
    try {
        const { tpusername, supervisorName } = req.body; // Extract usernames from the request body

        // Find the supervisor document by _id
        const supervisor = await userModel.findOne({ username: supervisorName });

        const supervisorTeam = await teamsModel.findOne({ supId: supervisor._id });

        if (!supervisorTeam) {
            return res.status(404).json({ message: 'Supervisor not found.' });
        }

        // Assuming you have a function to find user data based on the username
        const user = await userModel.findOne({ username: tpusername });

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        if (user) {
            // Add user data to the team array
            supervisorTeam.team.push({
                userId: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                nic: user.nic,
            });
        }

        // Save the updated supervisor document
        await supervisorTeam.save();

        res.json({ message: 'Team updated successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while updating the team array.' });
    }
});

export { router as teamsRouter };