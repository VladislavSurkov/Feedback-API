const express = require("express");
const router = express.Router();
const { registerValid, refreshValid, loginValid, ctrlWrapper } = require("../../middleware");
const { auth: ctrl } = require("../../controller");

router.post("/register", registerValid, ctrlWrapper(ctrl.registerUser));
router.post("/login", loginValid, ctrlWrapper(ctrl.loginUser));
router.post("/refresh-token", refreshValid, ctrlWrapper(ctrl.refreshToken));

module.exports = router;
