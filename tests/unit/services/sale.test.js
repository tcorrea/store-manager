const service = require('../../../services/sale');
const model = require('../../../models/sale');
const mock = require('../../../mocks/sale.mock');
const productService = require('../../../services/product');
const { ok, notFound } = require('../../../http/statusCode');
const sinon = require('sinon');
const { expect } = require('chai');
const { ErrorHandler } = require('../../../errors/ErrorHandler');

describe('Sale Service', () => {
  beforeEach(() => sinon.restore());
  describe('#index', () => {

    it('deve retornar todas as vendas', async () => {

      sinon.stub(model, 'index').resolves(mock.index.resolvesAndExpected);

      const products = await service.index();

      // expect(result).to.eql(expected);
      expect(products).to.deep.eq(mock.index.resolvesAndExpected);
    });

  });

  describe('#show', () => {

    it('deve retornar uma venda', async () => {

      sinon.stub(model, 'show').resolves(mock.show.expectedAndResolves);

      const sale = await service.show();

      expect(sale).to.deep.eq(mock.show.expectedAndResolves);
    });
  });

  describe('#store', () => {
    it('deve cadastrar uma venda com sucesso e retornar um objeto com a venda', async () => {

      sinon.stub(model, 'storeDate').resolves(mock.store.storeDateId);
      sinon.stub(model, 'store').resolves(mock.store.storeDateId);

      const sale = await service.store(mock.store.body);

      expect(sale).to.be.deep.eq(mock.store.expectedData);

    });
    // it('deve ocorrer um erro ao tentar cadastrar um venda sem existir o produto', async () => {
    //   const err = new ErrorHandler('Product not found', 404);
    //   sinon.stub(productService, 'checkIfExistsByArrayOfId').resolves(false);
    //   try {
    //     await service.store([])
    //   } catch (error) {
    //     console.log(error)
    //   }
    //   // expect(async () => await service.store([])).to.throws('Product not found');
    //   expect(async () => await service.store([])).to.throws(err);
    //   // expect(async () => await service.store([])).to.throws(ErrorHandler, /not found/);

    // });
  });

});
