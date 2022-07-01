const model = require('../models/product');

const productService = {
  index: async () => {
    const products = await model.index();
    return products;
  },
  show: async (id) => {
    const product = await model.show(id);
    return product;
  },
};

module.exports = productService;
