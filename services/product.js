const model = require('../models/product');

const productService = {
  index: () => model.index(),
  show: (id) => model.show(id),
  store: (body) => model.store(body),
  checkIfExistsByArrayOfId: async (arrayOfId) => {
    const result = await Promise.all(
      arrayOfId.map(async (id) => {
        const product = await model.show(id);
        if (product) return true;
      }),
    );
    return result.every((item) => item === true);
  },
};

module.exports = productService;
