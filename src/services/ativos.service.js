const axios = require('axios');
const { MongoClient } = require('mongodb');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const DB_NAME = process.env.MONGO_DB || 'binance';
const COLLECTION = process.env.MONGO_COLLECTION || 'carteira';

async function getAtivosComLucro() {
  const mongo = new MongoClient(MONGO_URI);
  await mongo.connect();
  const col = mongo.db(DB_NAME).collection(COLLECTION);
  const ativos = await col.find().toArray();

  const resultados = [];

  for (const ativo of ativos) {
    const symbol = ativo.asset + 'USDT';
    const precoAtual = await getPrecoAtual(symbol);

    const ganho = (precoAtual - ativo.valor_entrada_usdt) * ativo.quantidade;
    const porcentagem = ((precoAtual - ativo.valor_entrada_usdt) / ativo.valor_entrada_usdt) * 100;

    resultados.push({
      asset: ativo.asset,
      quantidade: ativo.quantidade,
      valor_entrada_usdt: ativo.valor_entrada_usdt,
      preco_atual_usdt: precoAtual,
      ganho_total_usdt: Number(ganho.toFixed(2)),
      porcentagem: Number(porcentagem.toFixed(2))
    });
  }

  await mongo.close();
  return resultados;
}

async function getPrecoAtual(symbol) {
  try {
    const res = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`);
    return parseFloat(res.data.price);
  } catch {
    return 0;
  }
}

module.exports = { getAtivosComLucro };
