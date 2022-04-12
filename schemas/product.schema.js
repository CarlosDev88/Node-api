const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().inet().min(10);

const createProductSchemata = Joi.object({
  name: name.required(),
  price: price.required(),
});

const updateProductSchemata = Joi.object({
  name: name,
  price: price,
});

const getProductSchemata = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchemata,
  updateProductSchemata,
  getProductSchemata,
};
