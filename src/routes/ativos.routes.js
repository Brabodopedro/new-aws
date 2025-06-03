const express = require('express');
const router = express.Router();
const { getAtivosComLucro } = require('../services/ativos.service');

/**
 * @swagger
 * tags:
 *   - name: Ativos
 *     description: Monitoramento de criptomoedas

 * @swagger
 * /ativos:
 *   get:
 *     summary: Lista os ativos da carteira com lucro/prejuízo
 *     description: Retorna todos os ativos salvos com o preço atual, valor de entrada e lucro/prejuízo calculado
 *     tags: [Ativos]
 *     responses:
 *       200:
 *         description: Lista de ativos com dados de valorização
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ativo'
 *       500:
 *         description: Erro interno
 */

router.get('/ativos', async (req, res) => {
  try {
    const ativos = await getAtivosComLucro();
    res.json(ativos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar ativos', detalhes: err.message });
  }
});

module.exports = router;
