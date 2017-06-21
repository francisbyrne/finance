const moment = require('moment');

/**
  * Get the base fields for a trade and transform as appropriate
  */
module.exports = function(fields) {
  const trade = {
    market:     fields.market,
    symbol:     fields.symbol,
    type:       fields.type,
    date:       fields.timestamp && moment.unix(parseInt(fields.timestamp)).toDate(),
    quantity:   fields.quantity,
    price:      fields.price,
    brokerage:  fields.brokerage,
    currency:   fields.currency
  };

  // Remove undefined properties
  return JSON.parse(JSON.stringify(trade));
};
