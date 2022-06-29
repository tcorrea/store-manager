const service = require('../../../services/product');
const model = require('../../../models/product');
const sinon = require('sinon');
const { expect } = require('chai');
const { valid } = require('joi');

describe('Product Service', () => {
  describe('#index', () => {

    beforeEach(() => {
      sinon.restore();
    });

    it('deve retornar todos os produtos', async () => {

      const expected = [{ id: 1, name: 'Caneta' }, { id: 2, name: 'Caderno' }];

      sinon.stub(model, 'index').resolves(expected);

      const result = await service.index();

      expect(result).to.eql(expected);
    });



  });

  describe('#show', () => {

    beforeEach(() => {
      sinon.restore();
    });

    it('deve retornar um produto', async () => {

      const expected = [{ id: 1, name: 'Caneta' }];

      sinon.stub(model, 'show').resolves(expected);

      const result = await service.show();

      expect(result).to.eql(expected);
    });
  });


  describe('#validateID', () => {

    beforeEach(() => {
      sinon.restore();
    });

    it('valida se dispara um erro ao mandar uma id invalida', () => {
      const invalidID = '';
      // expect(serieService.validateBody(invalidData))
      //   .to.be.rejectedWith(ValidationError)
      expect(() => service.validateID(invalidID))
        .to.throws('"id" is not allowed to be empty')
    });

    it('valida se é um ID valido', () => {
      const validID = 1;

      const value = service.validateID(validID);

      expect(value).to.be.eq(validID);
    });

  })
});
