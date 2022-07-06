const schema = require('../schemas/product');

const productMiddleware = {
  show: (req, _res, next) => {
    schema.show(req.params);
    next();
  },
  store: (req, _res, next) => {
    schema.store(req.body);
    next();
  },
  update: (req, _res, next) => {
    schema.show(req.params);
    schema.store(req.body);
    next();
  },
};

module.exports = productMiddleware;
