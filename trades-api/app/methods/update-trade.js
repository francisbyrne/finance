const Trade          = require('../models/trade');
const getTradeFields = require('./get-trade-fields');

module.exports = function(req, res) {

  const tradeFields = getTradeFields(req.body);

  Trade.findByIdAndUpdate(req.params.trade_id, { $set: tradeFields}, { new: true }, function (err, trade) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(trade);
    }
  });
};
