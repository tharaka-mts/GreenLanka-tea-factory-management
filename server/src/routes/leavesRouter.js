import express from 'express';
import { leaveModel } from '../models/leaves.js';

const router = express.Router();

// Fetch all leaves details
router.get('/getLeaves', (req, res) => {
    leaveModel.find()
    .then(leave => {
        res.json(leave);
    })
    .catch(err => {
        console.error('Error fetching leave:', err);
        res.status(500).json({ error: 'An error occurred while fetching leave.' });
    });
});

// Create new leave
router.post('/createLeave', async (req, res) => {
    try {
        const { username, startdate, enddate, type, reason, status } = req.body;

        const newLeave = new leaveModel({
            username,
            startdate,
            enddate,
            type,
            reason,
            status
        });

        const savedLeave = await newLeave.save();
        res.json(savedLeave);
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put("/updateLeave/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
  
      const update = await leaveModel.findByIdAndUpdate(id, { status: status });
      res.json(update);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

export { router as leavesRouter };