import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import { userRouter } from "./src/routes/userRouter.js";
import { getAttendanceRouter } from "./src/routes/getAttendance.js";

const app = express();
const port = 3005;

app.use(express.json());
app.use(cors());

app.use('/api', getAttendanceRouter);

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_CLOUD_URI);
        console.log("Connected to MongoDB");

        app.use('/auth', userRouter);

        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

startServer();