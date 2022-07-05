require('express-async-errors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

const productRouter = require('./routers/product');
const saleRouter = require('./routers/sale');

app.use('/products', productRouter);
app.use('/sales', saleRouter);

app.use((err, _req, res, _next) => {
  const { message, code } = err;

  res.status(code).json({ message });
});
// npm i chai-as-promised

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
