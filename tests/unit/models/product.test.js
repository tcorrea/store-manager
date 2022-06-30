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

      sinon.stub(connection, 'execute').resolves([mock.indexExpected]);

      const products = await model.index()

      expect(products).to.eql(mock.indexExpected);
    });

  });

  describe('#show', () => {

    it('deve retornar um produto', async () => {
      sinon.stub(connection, 'execute').resolves([[mock.showExpected]]);
      const product = await model.show(mock.showExpected.id);
      expect(product).to.eql(mock.showExpected);
    });
  });

});
