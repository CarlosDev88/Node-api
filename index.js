const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hola papus');
});

app.get('/nueva', (req, res) => {
  res.send('Hola una nueva ruta');
});

app.get('/productos', (req, res) => {
  res.json([
    {
      name: 'prodcut',
      price: 1000,
    },
    {
      name: 'prodcut 2',
      price: 2000,
    },
  ]);
});

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.json([
    {
      id,
      name: 'prodcut',
      price: 1000,
    },
  ]);
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;

  if (limit && offset) {
    res.json([
      {
        limit,
        offset,
        name: 'test',
        price: 1000,
      },
    ]);
  } else {
    res.send('ho hay parametros');
  }
});

app.get('/categories/:idCategory/products/:idProduct', (req, res) => {
  const { idCategory, idProduct } = req.params;
  res.json([
    {
      idCategory,
      idProduct,
      name: 'test',
      price: 1000,
    },
  ]);
});

app.listen(port, () => {
  console.log('runing.. on port 3001');
});
