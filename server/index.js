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

const users = [
    // Your initialUsers data here
  ];
  

  app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === userId);
  
    if (index !== -1) {
      users.splice(index, 1);
      res.status(200).json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });

  
  // Endpoint to fetch all users
  app.get('/api/users', (req, res) => {
    res.json(users);
  });
  
  // Endpoint to search users by name
  
  