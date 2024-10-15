const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // replace with your MySQL username
    password: 'pass@word1', // replace with your MySQL password
    database: 'job_portal'
});

// Connect to MySQL
db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// Endpoint to post a job
app.post('/jobs', (req, res) => {
    const { title, description, company, location } = req.body;

    const sql = 'INSERT INTO jobs (title, description, company, location) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, description, company, location], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, title, description, company, location });
    });
});

// Endpoint to get all jobs
app.get('/jobs', (req, res) => {
    db.query('SELECT * FROM jobs', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
