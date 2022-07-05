const service = require('../services/sale');
const { ok, created, notFound } = require('../http/statusCode');

const saleController = {
  index: async (_req, res) => {
    const sales = await service.index();
    res.status(ok.code).json(sales);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const sale = await service.show(id);
    if (sale.length > 0) return res.status(ok.code).json(sale);

    return res.status(notFound.code).json({ message: 'Sale not found' });
  },
  store: async (req, res) => {
    const sale = await service.store(req.body);
    return res.status(created.code).json(sale);
  },
};

module.exports = saleController;
