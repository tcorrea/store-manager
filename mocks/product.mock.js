const productMock = {
  indexExpected: [
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
  showExpected: {
    id: 1,
    name: 'Martelo de Thor',
  },
  invalidID: { id: '' },
  validID: { id: 1 },
};

module.exports = productMock;
