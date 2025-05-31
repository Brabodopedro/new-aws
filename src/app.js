const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const pingRoutes = require('./routes/ping.routes');
const ativosRoutes = require('./routes/ativos.routes');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware para JSON
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas
app.use('/', pingRoutes);
app.use('/', ativosRoutes);

// Rota de status
app.get('/status', (req, res) => {
  res.send('online');
});

// Start do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Swagger em http://localhost:${PORT}/api-docs`);
});
