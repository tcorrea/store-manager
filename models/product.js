const connection = require('../database/connection');

const productModel = {
  index: async () => {
    const query = 'SELECT * FROM StoreManager.products';

    const [products] = await connection.execute(query);

    return products;
  },
  show: async (id) => {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?';

    const [[product]] = await connection.execute(query, [id]);

    return product;
  },
};

module.exports = productModel;
