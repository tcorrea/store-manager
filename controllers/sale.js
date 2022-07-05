const service = require('../services/sale');
const { created } = require('../http/statusCode');

const saleController = {
  store: async (req, res) => {
    const sale = await service.store(req.body);
    return res.status(created.code).json(sale);
  },
};

module.exports = saleController;
