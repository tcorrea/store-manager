const model = require('../models/product');
const Joi = require('joi');

const productService = {
  validateID: (id) => {
    const schema = Joi.object({
      id: Joi.number().required(),
    });

    const { error, value } = schema.validate(id);

    if (error) throw error;

    return value;
  },
  index: async () => {
    const products = await model.index();
    return products;
  },
  show: async (id) => {
    const product = await model.show(id);
    return product;
  },
}

module.exports = productService;
