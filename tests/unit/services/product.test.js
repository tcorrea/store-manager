const service = require('../../../services/product');
const model = require('../../../models/product');
const mock = require('../../../mocks/product.mock');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Product Service', () => {
  beforeEach(() => sinon.restore());
  describe('#index', () => {

    it('deve retornar todos os produtos', async () => {

      sinon.stub(model, 'index').resolves(mock.index.expected);

      const products = await service.index();

      // expect(result).to.eql(expected);
      expect(products).to.deep.eq(mock.index.expected);
    });

  });

  describe('#show', () => {

    it('deve retornar um produto', async () => {

      sinon.stub(model, 'show').resolves(mock.showExpected);

      const product = await service.show();

      expect(product).to.deep.eq(mock.showExpected);
    });
  });

  describe('#store', () => {
    it('deve cadastrar com sucesso e retornar o id do produto cadastrado', async () => {

      sinon.stub(model, 'store').resolves(mock.store.id);

      const productId = await service.store(mock.store.body);

      expect(productId).to.be.eq(mock.store.id);

    });
  });


  // describe('#validateID', () => {


  //   it('valida se dispara um erro ao mandar uma id invalida', () => {
  //     // expect(serieService.validateBody(invalidData))
  //     //   .to.be.rejectedWith(ValidationError)
  //     expect(() => service.validateBody(mock.invalidID))
  //       .to.throws('"id" must be a number');
  //   });

  //   it('valida se é um ID valido', () => {
  //     const id = service.validateBody(mock.validID);
  //     expect(id).to.be.eql(mock.validID);
  //   });

  // })
});
