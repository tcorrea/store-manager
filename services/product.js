const model = require('../models/product');
const Joi = require('joi');

const productService = {
  validateBody: (params) => {
    // const schema = Joi.number().required();
    const schema = Joi.object({
      id: Joi.number().required(),
    });
    const { error, value } = schema.validate(params);
    if (error) throw error;
    return value;
  },
  index: async () => {
    // const [products, ..._rest] = await model.index();
    const products = await model.index();
    return products;
  },
  show: async (id) => {
    // const [product, ..._rest] = await model.show(id);
    const product = await model.show(id);
    return product;
  },
}

module.exports = productService;
