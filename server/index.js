import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import { userRouter } from "./src/routes/userRouter.js";
import { getAttendanceRouter } from "./src/routes/getAttendance.js";
import { getDetailsRouter } from "./src/routes/getDetails.js";
import { leavesRouter } from "./src/routes/leavesRouter.js";

// Import tea rate router and model
import { teaRateRouter } from './src/routes/teaRateRouter.js';

// Import expenses router and model
import { expensesRouter } from './src/routes/expensesRouter.js';

// Import qualityCheck router and model
import { qualityCheckRouter } from './src/routes/qualityCheckRouter.js';

// Import finalProduction router and model
import { finalProductionRouter } from './src/routes/finalProductionRouter.js';

const app = express();
const port = 3005;

app.use(express.json());
app.use(cors());

app.use('/api', getAttendanceRouter);
app.use('/api', getDetailsRouter);
app.use('/api', leavesRouter);

async function startServer() {
    try {
        await mongoose.connect(process.env.MONGODB_CLOUD_URI);
        console.log("Connected to MongoDB");

        app.use('/auth', userRouter);

        // Define routes for Tea Rate
        app.use('/api', teaRateRouter);

        // Define routes for Expenses
        app.use('/api', expensesRouter);

        // Define routes for QualityCheck
        app.use('/api', qualityCheckRouter);

        // Define routes for FinalProduction
        app.use('/api', finalProductionRouter);

        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

startServer();