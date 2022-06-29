const connection = require('../../../database/connection');
const model = require('../../../models/product');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Product Model', () => {

  describe('#index', () => {

    beforeEach(() => {
      sinon.restore();
    });

    it('deve retornar todos os produtos', async () => {
      const expected = [{ id: 1, name: 'Caneta' }, { id: 2, name: 'Caderno' }];

      sinon.stub(connection, 'execute').resolves(expected);

      const result = await model.index()

      expect(result).to.eql(expected);
    });

  });


  describe('#show', () => {

    beforeEach(() => {
      sinon.restore();
    });

    it('deve retornar um produto', async () => {
      const id = 1;
      const expected = [{ id, name: 'Caneta' }];

      sinon.stub(connection, 'execute').resolves(expected);

      const result = await model.show(id);

      expect(result).to.eql(expected);
    });
  });

});
