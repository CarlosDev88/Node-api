const express = require('express');
const ProductService = require('../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('es un filter');
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.created(body);

  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res, next) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const updateProduct = await service.update(id, body);
    res.json(updateProduct);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const deleteProduct = await service.delete(id);

  res.json(deleteProduct);
});

module.exports = router;
