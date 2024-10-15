const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fetchJobs = require('./routes/fetchJobs'); // Import fetchJobs route
const applyJob = require('./routes/applyJob');   // Import applyJob route

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/userdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Use the routes
app.use('/jobs', fetchJobs);   // For fetching jobs
app.use('/apply', applyJob);    // For applying for jobs

// Start the server
app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
