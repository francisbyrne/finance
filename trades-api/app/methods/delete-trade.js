const Trade = require('../models/trade');

module.exports = function(req, res) {
  Trade.remove({_id: req.params.trade_id}, function(err, trade) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json({message: `Successfully deleted trade with id: ${req.params.trade_id}`});
    }
  });
}
