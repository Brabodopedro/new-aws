const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ping API',
      version: '1.0.0',
      description: 'API simples com documentação Swagger',
    },
    tags: [
      {
        name: 'Ping',
        description: 'API de teste',
      },
      {
        name: 'Ativos',
        description: 'Monitoramento de criptomoedas',
      },
    ],
    components: {
      schemas: {
        Ativo: {
          type: 'object',
          properties: {
            asset: {
              type: 'string',
              example: 'BTC',
            },
            quantidade: {
              type: 'number',
              example: 0.0021,
            },
            valor_entrada_usdt: {
              type: 'number',
              example: 67000,
            },
            preco_atual_usdt: {
              type: 'number',
              example: 68300,
            },
            ganho_total_usdt: {
              type: 'number',
              example: 2.73,
            },
            porcentagem: {
              type: 'number',
              example: 1.94,
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
