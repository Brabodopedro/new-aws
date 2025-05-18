const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /ping:
 *   get:
 *     summary: Retorna pong
 *     responses:
 *       200:
 *         description: Retorna 'pong'
 */
router.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

module.exports = router;
