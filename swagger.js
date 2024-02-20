const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample app in Mern',
      version: '1.0.0',
      description: 'API for Sample app in Mern with mvc pattern',
    },
  },
  apis: ['./routes/*.js'], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(options);
console.log('Swagger Specification:', swaggerSpec);
module.exports = swaggerSpec;
