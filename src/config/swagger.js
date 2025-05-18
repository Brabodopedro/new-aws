const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ping API',
      version: '1.0.0',
      description: 'API simples com documentação Swagger',
    },
  },
  apis: ['./src/routes/*.js'], // caminhos dos arquivos com anotação Swagger
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
