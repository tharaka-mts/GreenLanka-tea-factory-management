import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

import { userRouter } from "./src/routes/userRouter.js";

const app = express();
const port = 3005;

app.use(express.json());
app.use(cors());

app.use('/auth', userRouter);

mongoose.connect(process.env.MONGODB_URI);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})