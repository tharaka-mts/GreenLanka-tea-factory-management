import { userWeightModel } from '../models/weight.js';
import express from "express";

const router = express.Router();


router.get('/getWeight/:username', async (req, res) => {
    const username = req.params.username;
  try {

    // You can replace this with actual roles from your database or a hardcoded array
    // const roles = ['employee', 'manager', 'supervisor', 'tea plucker'];
    const user = await userWeightModel.findOne({username});

    res.json(user)
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

 

export { router as weightRouter };
