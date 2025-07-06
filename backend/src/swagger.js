// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-Learning API',
      version: '1.0.0',
      description: 'API documentation for E-Learning App',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
      {
        url: 'https://e-learning-frontend.onrender.com', 
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/controllers/*.js'], 
}


const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
