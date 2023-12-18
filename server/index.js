import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import { userRouter } from "./src/routes/userRouter.js";
import { getDetailsRouter } from "./src/routes/getDetails.js";
import { getAttendanceRouter } from "./src/routes/getAttendance.js";
import { userAttendanceRouter } from "./src/routes/userAttendance.js";
import { empProductionRouter } from "./src/routes/empProduct.js";
import { teamsRouter } from "./src/routes/teams.js";
import { supProductionRouter } from "./src/routes/supProduct.js";
import { AddSalaryDetailsRouter } from "./src/routes/addSalaryDetails.js";
import { weightRouter } from "./src/routes/weightRouter.js";
import { leavesRouter } from "./src/routes/leavesRouter.js";
import { teaRateRouter } from "./src/routes/teaRateRouter.js";
import { salaryRouter } from "./src/routes/salaryRouter.js";
import { finalProductionRouter } from './src/routes/finalProductionRouter.js';
import { expensesRouter } from './src/routes/expensesRouter.js';
import { qualityCheckRouter } from './src/routes/qualityCheckRouter.js';

const app = express();
const port = 3005;

app.use(express.json());
app.use(cors());

app.use("/public", express.static("public"));

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_CLOUD_URI);
    // await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    app.use("/auth", userRouter);
    app.use('/api', getAttendanceRouter);
    app.use("/teams", teamsRouter);
    app.use("/get", getDetailsRouter);
    app.use('/api', getDetailsRouter); //new
    app.use("/attendance", userAttendanceRouter);
    app.use("/emp/prod", empProductionRouter);
    app.use("/sup/prod", supProductionRouter);
    app.use("/addSalaryDetails", AddSalaryDetailsRouter);
    app.use("/getWeight", weightRouter);
    app.use("/leave", leavesRouter);
    app.use('/api', leavesRouter); //new
    app.use("/api", teaRateRouter);
    app.use("/salary", salaryRouter);
    app.use('/api', finalProductionRouter);
    app.use('/api', expensesRouter);
    app.use('/api', qualityCheckRouter);

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

startServer();
