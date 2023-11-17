const { errorHandler } = require("./api/errorHandler");
const { ctrlWrapper } = require("./api/ctrlWrapper");
const { authMiddleware } = require("./auth/authMiddleware");
const { uploadCloud } = require("./user/uploadCloud");
const { addTaskValidation, updateTaskValidation } = require("./task/taskValidation");
const { loginValid, registerValid, refreshValid } = require("./auth/authUserValidation");
const { userInfoValidation } = require("./user/userInfoValidation");

module.exports = {
  errorHandler,
  ctrlWrapper,
  authMiddleware,
  uploadCloud,
  loginValid,
  registerValid,
  refreshValid,
  addTaskValidation,
  userInfoValidation,
  updateTaskValidation,
};
