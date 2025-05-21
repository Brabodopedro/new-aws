require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const Crypto = require('./models/Crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const BINANCE_BASE = 'https://api.binance.com/api/v3';

// 1) Conexão com MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Erro MongoDB:', err));

// 2) Rota para obter preços
app.get('/prices', async (req, res) => {
  try {
    // a) Busco todas as cryptos salvas
    const cryptos = await Crypto.find().lean(); 

    // b) Para cada symbol, busco o preço atual na Binance
    const quotes = await Promise.all(
      cryptos.map(async ({ symbol }) => {
        // montagem do par de mercado, ex: BTC → BTCUSDT
        const pair = symbol.toUpperCase() + 'USDT';
        const resp = await axios.get(`${BINANCE_BASE}/ticker/price`, {
          params: { symbol: pair }
        });
        return {
          symbol,
          price: parseFloat(resp.data.price)
        };
      })
    );

    // c) Retorno o array de cotações
    res.json({ data: quotes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar preços' });
  }
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
