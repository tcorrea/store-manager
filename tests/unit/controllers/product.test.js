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
      // Mockar a função que o controller chama
      // nesse caso: sevice.index
      sinon.stub(service, 'index').resolves(mock.index.expected);
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      // ação
      await controller.index(req, res);

      // assertivas
      expect(res.status.calledWith(ok.code)).to.be.true;
      expect(res.json.calledWith(mock.index.expected)).to.be.true;
    });

  });

  describe('#show', () => {

    it('deve retornar um produto', async () => {

      sinon.stub(service, 'show').resolves(mock.show.expected);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.params = mock.show.validId;

      await controller.show(req, res);
      expect(res.status.calledWith(ok.code)).to.be.true;
      expect(res.json.calledWith(mock.show.expected)).to.be.true;

    });

    it('deve retornar uma mensagem de erro ao não encontrar um produto', async () => {

      sinon.stub(service, 'show').resolves(null);

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

    it('deve cadastrar um produto e retorna-lo com a id e nome', async () => {
      sinon.stub(service, 'store').resolves(mock.store.id);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.body = mock.store.body;

      await controller.store(req, res);

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.json.calledWith(mock.store.expected)).to.be.true;
    });
  });

  describe('#update', () => {

    it('deve alterar um produto com sucesso', async () => {
      sinon.stub(service, 'update').resolves();
      sinon.stub(service, 'show').resolves(mock.show.expected);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.params = mock.update.params;
      req.body = mock.update.body;

      await controller.update(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledWith(mock.store.expected)).to.be.true;
    });

    it('deve retornar product not found ao tentar alterar um produto que não existe', async () => {

      sinon.stub(service, 'update').resolves();
      sinon.stub(service, 'show').resolves(null);

      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();
      req.params = mock.update.params;
      req.body = mock.update.body;

      await controller.update(req, res);

      expect(res.status.calledWith(notFound.code)).to.be.true;

      expect(res.json.calledWith(mock.show.notFoundExpected)).to.be.true;
    });

  });
});
