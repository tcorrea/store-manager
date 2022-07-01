const service = require('../services/product');
const { ok, notFound } = require('../http/statusCode');

const productController = {
  index: async (_req, res) => {
    const products = await service.index();
    res.status(ok.code).json(products);
  },
  show: async (req, res) => {
    const { id } = req.params;

    const product = await service.show(id);

    if (product) return res.status(ok.code).json(product);

    res.status(notFound.code).json({ message: 'Product not found' });
  },

};

module.exports = productController;
