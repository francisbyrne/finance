const Trade           = require('../models/trade');
const moment          = require('moment');
const getTradeFields = require('./get-trade-fields');

module.exports = function(req, res) {

  const tradeFields = getTradeFields(req.body);
  const trade = new Trade(tradeFields);

  trade.save(function(err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json({ message: `Trade created with id: ${trade._id}` });
    }
  });

};
