const Trade = require('../models/trade');

module.exports = function(req, res) {
  Trade.findById(req.params.trade_id, function(err, trade) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(trade);
    }
  });
}
