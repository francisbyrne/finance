const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TradeSchema = new Schema({
  market: String,
  symbol: String,
  type: String,
  date: Date,
  quantity: Number,
  price: Number,
  brokerage: { type: Number, default: 0 },
  currency: { type: String, default: 'USD' } // Assuming currency is same for price and brokerage
});

module.exports = mongoose.model('Trade', TradeSchema);
