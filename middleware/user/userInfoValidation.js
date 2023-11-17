const Joi = require("joi");
const { validateBody } = require("../../helpers/validateBody");

const userInfoSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  username: Joi.string().min(3).max(30),
  email: Joi.string().email({
    maxDomainSegments: 2,
    tlds: { deny: ["ru"] },
  }),
});

const userInfoValidation = validateBody(userInfoSchema);

module.exports = {
  userInfoValidation,
};
