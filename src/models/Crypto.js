const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true }
  // você pode adicionar outros campos, ex: nome, quantidade etc.
});

module.exports = mongoose.model('Crypto', cryptoSchema);
