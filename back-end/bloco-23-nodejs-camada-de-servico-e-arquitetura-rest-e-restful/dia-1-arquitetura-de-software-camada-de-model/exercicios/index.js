const express = require('express');
const bodyParser = require('body-parser');
const useRouter = require('./Router/user');
const error = require('./middlewares/error');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/user', useRouter);
app.use(error);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});