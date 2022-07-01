const productMock = {
  index: {
    expected: [
      {
        id: 1,
        name: 'Martelo de Thor',
      },
      {
        id: 2,
        name: 'Traje de encolhimento',
      },
      {
        id: 3,
        name: 'Escudo do Capitão América',
      },
    ],
  },
  show: {
    expected: {
      id: 1,
      name: 'Martelo de Thor',
    },
    notFoundExpected: {
      message: 'Product not found',
    },
    validId: { id: 1 },
    invalidId: { id: '' },
    notFoundId: { id: 99999 },
  },
  store: {
    id: 1,
    return: { insertId: 1 },
    body: { name: 'ProdutoX' },
    expected: { id: 1, name: 'ProdutoX' },
  },
};

module.exports = productMock;
