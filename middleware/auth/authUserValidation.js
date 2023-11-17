const Joi = require("joi");

const { validateBody } = require("../../helpers/validateBody");

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  username: Joi.string().min(3).max(30),
  password: Joi.string()
    .regex(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/)
    .min(8)
    .max(16),
  email: Joi.string().email({ maxDomainSegments: 2, tlds: { deny: ["ru"] } }),
}).required();

const refreshSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const registerValidation = validateBody(userSchema);
const loginValidation = validateBody(
  userSchema.keys({ name: Joi.forbidden(), username: Joi.forbidden() })
);

const refreshValidation = validateBody(refreshSchema);

module.exports = {
  registerValidation,
  loginValidation,

  refreshValidation,
};
