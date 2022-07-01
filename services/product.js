const model = require('../models/product');

const productService = {
  index: () => model.index(),
  show: (id) => model.show(id),
  store: (body) => model.store(body),
};

module.exports = productService;
