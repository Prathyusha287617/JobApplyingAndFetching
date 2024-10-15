// routes/applyJob.js
const express = require('express');
const Application = require('../models/user'); // Import the Application model

const router = express.Router();

// Endpoint to apply for a job
router.post('/', async (req, res) => {
    const { jobId, userName, userEmail,title } = req.body;
    const application = new Application({ jobId, userName, userEmail,title });

    try {
        await application.save();
        res.send('Application submitted');
    } catch (error) {
        res.status(500).send('Error submitting application');
    }
});

module.exports = router;
