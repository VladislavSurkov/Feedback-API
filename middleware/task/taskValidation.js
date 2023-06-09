const Joi = require("joi");
const { ValidationError } = require("../../helpers/errors");

module.exports = {
  addTaskValidation: (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().required(),
      category: Joi.string().valid("UI", "UX", "Enhancement", "Bug", "Feature"),
      status: Joi.string(),
      upvotes: Joi.number(),
      description: Joi.string().required()
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      next(new ValidationError(validationResult.error.details));
    }
    next();
  },
  updateTaskValidation: (req, res, next) => {
    const schema = Joi.object({
      title: Joi.string().required(),
      category: Joi.string().valid("UI", "UX", "Enhancement", "Bug", "Feature"),
      status: Joi.string(),
      upvotes: Joi.number(),
      description: Joi.string().required(),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      next(new ValidationError(validationResult.error.details));
    }
    next();
  },
};
