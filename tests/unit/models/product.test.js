const connection = require('../../../database/connection');
const model = require('../../../models/product');
const mock = require('../../../mocks/product.mock');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Product Model', () => {

  beforeEach(() => {
    sinon.restore();
  });

  describe('#index', () => {

    it('deve retornar todos os produtos', async () => {

      sinon.stub(connection, 'execute').resolves([mock.index.expected]);

      const products = await model.index()

      expect(products).to.eql(mock.index.expected);
    });

  });

  describe('#show', () => {

    it('deve retornar um produto', async () => {

      sinon.stub(connection, 'execute').resolves([[mock.show.expected]]);

      const product = await model.show(mock.show.validId);

      expect(product).to.eql(mock.show.expected);
    });

  });

  describe('#store', () => {

    it('deve cadastrar com sucesso e retornar o id do produto cadastrado', async () => {

      sinon.stub(connection, 'execute').resolves([mock.store.return]);

      const id = await model.store(mock.store.body);

      expect(id).to.be.eq(mock.store.id);
    });

  });

  describe('#update', () => {

    it('deve alterar um produto com sucesso', async () => {

      sinon.stub(connection, 'execute').resolves([mock.update.resolves]);

      const affectedRows = await model.update(mock.update.params.id, mock.update.body.name);

      expect(affectedRows).to.be.eq(1);
    });

  });
});
