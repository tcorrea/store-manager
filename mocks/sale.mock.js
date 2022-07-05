const saleMock = {
  store: {
    body: [
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ],
    resolves: { insertId: 1 },
    expected: 1,
    storeDateId: 1,
    expectedData: {
      id: 1,
      itemsSold: [
        {
          productId: 1,
          quantity: 1,
        },
        {
          productId: 2,
          quantity: 5,
        },
      ],
    },
  },
};
module.exports = saleMock;
