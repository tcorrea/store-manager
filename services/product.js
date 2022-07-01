const model = require('../models/product');

const productService = {
  index: async () => await model.index(),
  show: async (id) => await model.show(id),
  store: async (body) => await model.store(body),
};

module.exports = productService;
