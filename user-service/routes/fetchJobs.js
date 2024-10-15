// routes/fetchJobs.js
const express = require('express');
const axios = require('axios');

const router = express.Router();
const ADMIN_SERVICE_URL = 'http://localhost:3000/jobs';

// Endpoint to fetch all jobs
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(ADMIN_SERVICE_URL);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching jobs');
    }
});

module.exports = router;
