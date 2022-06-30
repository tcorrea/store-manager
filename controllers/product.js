const service = require('../services/product');

const productController = {
  index: async (_req, res) => {
    const products = await service.index();
    res.status(200).json(products);
  },
  show: async (req, res) => {
    const { id } = req.params;
    service.validateBody({ id });
    const product = await service.show(id);
    res.status(200).json(product);
  },
};

module.exports = productController;
