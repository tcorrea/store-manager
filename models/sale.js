const connection = require('../database/connection');

const saleModel = {
  store: async (saleDateId, productSoldArrayOfObjects) => {
    const productSoldArrayOfArrays = productSoldArrayOfObjects.map(
      (product) => [saleDateId, product.productId, product.quantity],
    );
    const query = `
      INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
        VALUES ?
    `;
    const [{ insertId }] = await connection.query(query, [
      productSoldArrayOfArrays,
    ]);
    return insertId;
  },
  storeDate: async () => {
    const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
    const [{ insertId }] = await connection.execute(query);
    return insertId;
  },
};

module.exports = saleModel;
