const service = require('../services/product');
const code = require('../http/statusCode');

const productController = {
  index: async (_req, res) => {
    const products = await service.index();
    res.status(code.ok).json(products);
  },
  show: async (req, res) => {
    const { id } = req.params;

    const product = await service.show(id);

    if (product) return res.status(code.ok).json(product);

    res.status(code.notFound).json({ message: 'Product not found' });
  },

};

module.exports = productController;
