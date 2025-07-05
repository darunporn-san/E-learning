const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')
const allowedOrigins = ['https://e-learning-frontend.onrender.com', 'http://localhost:3000']; // Add your frontend's actual Render URL and any local dev URL

const app = express()
app.use(express.json())
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true // Important for cookies/sessions
}));
app.use('/api/auth', authRoutes)
module.exports = app