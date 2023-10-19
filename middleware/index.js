const { errorHandler } = require("./api/errorHandler");
const { ctrlWrapper } = require("./api/ctrlWrapper");
const { authMiddleware } = require("./auth/authMiddleware");
const { uploadCloud } = require("./user/uploadCloud");
const {
  addTaskValidation,
  updateTaskValidation,
  upvotesValidation,
} = require("./task/taskValidation");
const {
  loginValidation,
  registerValidation,
} = require("./auth/authUserValidation");
const { userInfoValidation } = require('./user/userInfoValidation')

module.exports = {
  errorHandler,
  ctrlWrapper,
  authMiddleware,
  uploadCloud,
  loginValidation,
  registerValidation,
  addTaskValidation,
  userInfoValidation,
  updateTaskValidation,
  upvotesValidation,
};
