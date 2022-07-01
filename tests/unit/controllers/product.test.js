const service = require('../../../services/product');
const controller = require('../../../controllers/product');
const mock = require('../../../mocks/product.mock');
const { ok, notFound } = require('../../../http/statusCode');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Product Controller', () => {

  beforeEach(() => sinon.restore());

  describe('#index', () => {

    it('deve retornar todos os produtos', async () => {
      // arranjo
      sinon.stub(service, 'index').resolves(mock.indexExpected);
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      // ação
      await controller.index(req, res);

      // assertivas
      expect(res.status.calledWith(ok.code)).to.be.eq(true);
      expect(res.json.calledWith(mock.indexExpected)).to.be.eq(true);
    });

  });

  describe('#show', () => {

    it('deve retornar um produto', async () => {

      sinon.stub(service, 'show').resolves(mock.showExpected);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.params = mock.validID;

      // const product = await service.show(req, res);
      // expect(product).to.deep.eq(mock.showExpected);

      await controller.show(req, res);
      expect(res.status.calledWith(ok.code)).to.be.true;
      expect(res.json.calledWith(mock.showExpected)).to.be.true;

    });

    it('deve retornar uma mensagem de erro ao não encontrar um produto', async () => {

      sinon.stub(service, 'show').resolves(null);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.params = mock.notFoundID;

      await controller.show(req, res);

      expect(res.status.calledWith(notFound.code)).to.be.true;

      expect(res.json.calledWith(mock.showNotFoundExpected)).to.be.true;
    });

  })
});
