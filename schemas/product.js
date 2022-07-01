const Joi = require('joi');
const { badRequest } = require('../http/statusCode');

const productSchema = {
  show: (params) => {
    const schema = Joi.object({
      id: Joi.number().required(),
    });
    const { error } = schema.validate(params);
    if (error) {
      return {
        ok: false,
        code: badRequest.code,
        message: badRequest.message,
      };
    }
    return { ok: true };
  },
};

module.exports = productSchema;
