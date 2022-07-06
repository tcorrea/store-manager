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
  index: {
    resolvesAndExpected: [{
      saleId: 1,
      date: '2021-09-09T04:54:29.000Z',
      productId: 1,
      quantity: 2,
    },
    {
      saleId: 1,
      date: '2021-09-09T04:54:54.000Z',
      productId: 2,
      quantity: 2,
    }],
  },
  show: {
    expectedAndResolves: [{
      date: '2021-09-09T04:54:29.000Z',
      productId: 1,
      quantity: 2,
    },
    {
      date: '2021-09-09T04:54:54.000Z',
      productId: 2,
      quantity: 2,
    }],
    notFoundExpected: {
      message: 'Sale not found',
    },
    notFoundId: 9999,
    invalidId: '',
    validId: 1,
  },
};
module.exports = saleMock;
