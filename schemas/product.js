const Joi = require('joi');
// const { badRequest } = require('../http/statusCode');
const { ErrorHandler } = require('../errors/ErrorHandler');

const productSchema = {
  show: (params) => {
    const schema = Joi.object({
      id: Joi.number().required(),
    });
    const { error } = schema.validate(params);
    if (error) throw new ErrorHandler(error.message, 400);
    return { ok: true };
  },
  store: (body) => {
    const schema = Joi.object({
      name: Joi.string().required().min(5),
    });

    const { error } = schema.validate(body);
    if (error) {
      const code = error.message.includes('required') ? 400 : 422;
      throw new ErrorHandler(error.message, code);
    }
  },
};

module.exports = productSchema;
