const Joi = require('joi');
const code = require('../http/statusCode');

const productSchema = {
  show: (params) => {
    const schema = Joi.object({
      id: Joi.number().required(),
    });
    const { error } = schema.validate(params);
    if (error) {
      return {
        ok: false,
        code: code.badRequest,
        message: error.message,
      };
    }
    return { ok: true };
  },
};

module.exports = productSchema;
