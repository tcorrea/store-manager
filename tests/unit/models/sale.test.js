const connection = require('../../../database/connection');
const model = require('../../../models/sale');
const mock = require('../../../mocks/sale.mock');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Sale Model', () => {

  beforeEach(() => {
    sinon.restore();
  });

  // describe('#index', () => {

  //   it('deve retornar todos os produtos', async () => {

  //     sinon.stub(connection, 'execute').resolves([mock.index.expected]);

  //     const products = await model.index()

  //     expect(products).to.eql(mock.index.expected);
  //   });

  // });

  // describe('#show', () => {

  //   it('deve retornar um produto', async () => {

  //     sinon.stub(connection, 'execute').resolves([[mock.show.expected]]);

  //     const product = await model.show(mock.show.validId);

  //     expect(product).to.eql(mock.show.expected);
  //   });

  // });

  describe('#store', () => {

    it('deve cadastrar com sucesso e retornar o id do produto cadastrado', async () => {

      sinon.stub(connection, 'query').resolves([mock.store.resolves]);

      const id = await model.store(mock.store.storeDateId, mock.store.body);

      expect(id).to.be.eq(mock.store.expected);
    });

  });
  describe('#storeDate', () => {

    it('deve cadastrar uma data com sucesso e retornar o id', async () => {

      sinon.stub(connection, 'execute').resolves([mock.store.resolves]);

      const id = await model.storeDate();

      expect(id).to.be.eq(mock.store.expected);
    });

  });
});
