// models/Application.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    jobId: {
        type: Number,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^\S+@\S+\.\S+$/.test(v); // Basic email validation
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    title: {
        type: String,
        required: true
    },
    applicationDate: {
        type: Date,
        default: Date.now
    }
});

const user = mongoose.model('user', userSchema);

module.exports = user;
