const schema = require('../schemas/sale');

const saleMiddleware = {
  store: (req, _res, next) => {
    // const { ok, code, message } = schema.store(req.body);
    schema.store(req.body);

    // if (!ok) return res.status(code).json({ message });

    next();
  },
};

module.exports = saleMiddleware;
