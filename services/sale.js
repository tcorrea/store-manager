const model = require('../models/sale');
const { ErrorHandler } = require('../errors/ErrorHandler');
const productService = require('./product');

const saleService = {
  index: () => model.index(),
  show: (id) => model.show(id),
  store: async (body) => {
    const ids = body.reduce((result, item) => {
      result.push(item.productId);
      return result;
    }, []);

    const existsProduct = await productService.checkIfExistsByArrayOfId(ids);

    if (!existsProduct) {
      throw new ErrorHandler('Product not found', 404);
    }
    const dateId = await model.storeDate();
    await model.store(dateId, body);
    return { id: dateId, itemsSold: body };
  },
};

module.exports = saleService;
