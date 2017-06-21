const Trade = require('../models/trade');

module.exports = function(req, res) {
  Trade.find(function(err, trades) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(trades);
    }
  });
};
