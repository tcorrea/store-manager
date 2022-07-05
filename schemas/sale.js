const Joi = require('joi');
const { ErrorHandler } = require('../errors/ErrorHandler');

const saleSchema = {
  store: (body) => {
    const schema = Joi.object({
      productId: Joi.required(),
      quantity: Joi.number().min(1).required(),
    });
    body.forEach((sale) => {
      const { error } = schema.validate(sale);
      if (error) {
        const code = error.message.includes('required') ? 400 : 422;
        throw new ErrorHandler(error.message, code);
      }
    });
  },
  show: (params) => {
    const schema = Joi.object({
      id: Joi.number().required(),
    });
    const { error } = schema.validate(params);
    if (error) throw new ErrorHandler(error.message, 400);
  },
};

module.exports = saleSchema;
