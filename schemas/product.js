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
  store: (body) => {
    const schema = Joi.object({
      name: Joi.string().required().min(5),
    });
    const { error } = schema.validate(body);
    if (error) {
      const code = error.message === '"name" is required' ? 400 : 422;
      return {
        ok: false,
        code,
        message: error.message,
      };
    }
    return { ok: true };
  },
};

module.exports = productSchema;
