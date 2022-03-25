const bodyParser = require('body-parser');
const express = require('express');
const validitionTok = require('./validitionToken');
const app = express();
app.use(bodyParser.json());

app.get('/btc/price', async (req, res) => {
  const request = await fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
  const result = await request.json();

  res.status(200).json(result);
});

app.listen(3002, () => {
  console.log("Rodando na porta 3002");
});
