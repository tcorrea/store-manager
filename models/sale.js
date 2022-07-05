const connection = require('../database/connection');

const saleModel = {
  index: async () => {
    const query = `
      SELECT s.id as saleId, s.date, sp.product_id as productId, sp.quantity
      FROM StoreManager.sales s, StoreManager.sales_products sp
      WHERE s.id = sp.sale_id
    `;

    const [sales] = await connection.execute(query);

    return sales;
  },
  show: async (id) => {
    const query = `
      SELECT distinct s.date, sp.product_id as productId, sp.quantity
      FROM StoreManager.sales s, StoreManager.sales_products sp
      WHERE sp.sale_id = ?
    `;

    const [sale] = await connection.execute(query, [id]);
    return sale;
  },
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
