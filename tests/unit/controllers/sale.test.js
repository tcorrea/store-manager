const service = require('../../../services/sale');
const controller = require('../../../controllers/sale');
const mock = require('../../../mocks/sale.mock');
const { ok, notFound } = require('../../../http/statusCode');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Product Controller', () => {

  beforeEach(() => sinon.restore());

  describe('#index', () => {

    it('deve retornar todos as vendas', async () => {
      // arranjo
      // Mockar a função que o controller chama
      // nesse caso: sevice.index
      sinon.stub(service, 'index').resolves(mock.index.resolvesAndExpected);
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      // ação
      await controller.index(req, res);

      // assertivas
      expect(res.status.calledWith(ok.code)).to.be.true;
      expect(res.json.calledWith(mock.index.resolvesAndExpected)).to.be.true;
    });

  });

  describe('#show', () => {

    it('deve retornar uma venda', async () => {

      sinon.stub(service, 'show').resolves(mock.show.expectedAndResolves);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.params = mock.show.validId;

      await controller.show(req, res);
      expect(res.status.calledWith(ok.code)).to.be.true;
      expect(res.json.calledWith(mock.show.expectedAndResolves)).to.be.true;

    });

    it('deve retornar uma mensagem de erro ao não encontrar uma venda', async () => {

      sinon.stub(service, 'show').resolves([]);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.params = mock.show.notFoundId;

      await controller.show(req, res);

      expect(res.status.calledWith(notFound.code)).to.be.true;

      expect(res.json.calledWith(mock.show.notFoundExpected)).to.be.true;
    });

  });

  describe('#store', () => {

    it('deve cadastrar uma venda e retorna a venda em um objeto', async () => {
      sinon.stub(service, 'store').resolves(mock.store.expectedData);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.body = mock.store.body;

      await controller.store(req, res);

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(mock.store.expectedData)).to.be.true;
    });
  });

});
