const service = require('../services/product');
const { ok, notFound, created } = require('../http/statusCode');

const productController = {

  index: async (_req, res) => {
    const products = await service.index();
    res.status(ok.code).json(products);
  },

  show: async (req, res) => {
    const { id } = req.params;

    const product = await service.show(id);

    if (product) return res.status(ok.code).json(product);

    return res.status(notFound.code).json({ message: 'Product not found' });
  },

  store: async (req, res) => {
    const productId = await service.store(req.body);

    const storedProduct = { id: productId, ...req.body };

    return res.status(created.code).json(storedProduct);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const product = await service.show(id);

    if (!product) return res.status(notFound.code).json({ message: 'Product not found' });

    const result = await service.update(id, name);
    console.log(result);
    const updatedProduct = { id, name };

    return res.status(ok.code).json(updatedProduct);
  },

};

module.exports = productController;
