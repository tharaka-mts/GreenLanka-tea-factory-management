import express from "express";
import cors from 'cors';
import mongoose, { get } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import { userRouter } from "./src/routes/userRouter.js";
import { getDetailsRouter } from "./src/routes/getDetails.js";
import { userAttendanceRouter } from "./src/routes/userAttendance.js";

const app = express();
const port = 3005;

app.use(express.json());
app.use(cors());

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_CLOUD_URI);
        // await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        app.use('/auth', userRouter);
        app.use('/get', getDetailsRouter);
        app.use('/attendance', userAttendanceRouter);

        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

startServer();