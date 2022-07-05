const schema = require('../schemas/product');

const productMiddleware = {
  show: (req, _res, next) => {
    // const { ok, code, message } = schema.show(req.params);

    // if (!ok) return res.status(code).json({ message });

    schema.show(req.params);

    // res.status(code).json({ message });
    next();
  },
  store: (req, _res, next) => {
    // const { ok, code, message } = schema.store(req.body);
    schema.store(req.body);

    // if (!ok) return res.status(code).json({ message });
    // res.status(code).json({ message });

    next();
  },
};

module.exports = productMiddleware;
