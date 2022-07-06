const connection = require('../../../database/connection');
const model = require('../../../models/sale');
const mock = require('../../../mocks/sale.mock');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Sale Model', () => {

  beforeEach(() => {
    sinon.restore();
  });

  describe('#index', () => {

    it('deve retornar todas as vendas', async () => {

      sinon.stub(connection, 'execute').resolves([mock.index.resolvesAndExpected]);

      const sales = await model.index()

      expect(sales).to.eql(mock.index.resolvesAndExpected);
    });

  });

  describe('#show', () => {

    it('deve retornar uma venda', async () => {

      sinon.stub(connection, 'execute').resolves([mock.show.expectedAndResolves]);

      const sale = await model.show(mock.show.validId);

      expect(sale).to.eql(mock.show.expectedAndResolves);
    });

  });

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
