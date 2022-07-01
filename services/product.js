const model = require('../models/product');

const productService = {
  index: async () => {
    return await model.index();
  },
  show: async (id) => {
    return await model.show(id);
  },
  store: async (body) => {
    return await model.store(body);
  },
};

module.exports = productService;
