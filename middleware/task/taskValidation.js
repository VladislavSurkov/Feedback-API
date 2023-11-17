const Joi = require("joi");
const { validateBody } = require("../../helpers/validateBody");

const TaskSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().valid("UI", "UX", "Enhancement", "Bug", "Feature"),
  status: Joi.string(),
  upvotes: Joi.number(),
  description: Joi.string().required(),
});

const addTaskValidation = validateBody(TaskSchema);
const updateTaskValidation = validateBody(TaskSchema);

module.exports = {
  addTaskValidation,
  updateTaskValidation,
};
