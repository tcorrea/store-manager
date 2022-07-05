const schema = require('../schemas/sale');

const saleMiddleware = {
  index: (req, _res, next) => {
    schema.index(req.params);
    next();
  },
  show: (req, _res, next) => {
    schema.show(req.params);
    next();
  },
  store: (req, _res, next) => {
    schema.store(req.body);
    next();
  },
};

module.exports = saleMiddleware;
