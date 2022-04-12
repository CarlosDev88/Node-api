const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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

module.exports = router;
