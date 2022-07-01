const schema = require('../schemas/product');

const productMiddleware = {
  show: (req, res, next) => {
    const { ok, code, message } = schema.show(req.params);

    if (!ok) return res.status(code).json({ message });

    next();
  },
  store: (req, res, next) => {
    const { ok, code, message } = schema.store(req.body);

    if (!ok) return res.status(code).json({ message });

    next();
  },
};

module.exports = productMiddleware;
