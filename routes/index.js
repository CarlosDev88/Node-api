const productRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const express = require('express');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  app.use('/products', productRouter);
  app.use('/categories', categoriesRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi;
