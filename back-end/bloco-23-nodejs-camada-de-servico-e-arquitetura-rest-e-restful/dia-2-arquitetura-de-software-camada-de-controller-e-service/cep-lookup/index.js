const express = require('express');
const useRouter = require('./router/getRouter');
const error = require('./middllewares/error');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/user', useRouter);
app.use(error);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});