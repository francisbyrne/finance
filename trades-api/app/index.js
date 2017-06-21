const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Trades = require('./methods');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/', router);

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log(`Trades API listening on http://localhost:${port}`);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/finance')

router.route('/trades').get(Trades.list);
router.route('/trades').post(Trades.create);
router.route('/trades/:trade_id').get(Trades.get);
router.route('/trades/:trade_id').post(Trades.update);
router.route('/trades/:trade_id').delete(Trades.delete);
