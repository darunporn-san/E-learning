const express = require('express')
const cors = require('cors')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger')

const allowedOrigins = [
  'https://e-learning-frontend.onrender.com',
  'https://e-learning-03pf.onrender.com', // ✅ ต้องมี domain Swagger UI ด้วย
  'http://localhost:3000',
  'http://localhost:3001',
];
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
    credentials: true
}))

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// Routes
app.use('/api/auth', authRoutes)

module.exports = app
