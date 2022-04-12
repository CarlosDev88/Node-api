const express = require('express');
const router = express.Router();

router.get('/:idCategory/products/:idProduct', (req, res) => {
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

module.exports = router;
