const express = require("express");
const router = express.Router();
const {
  ctrlWrapper,
  addTaskValidation,
  updateTaskValidation,
  authMiddleware,
} = require("../../middleware");
const { tasks: ctrl } = require("../../controller");

router.use(authMiddleware);

router.get("/", ctrlWrapper(ctrl.fetchTask));
router.post("/", addTaskValidation, ctrlWrapper(ctrl.addTask));
router.patch("/:id", updateTaskValidation, ctrlWrapper(ctrl.updateTask));
router.patch("/votes/:id", ctrlWrapper(ctrl.upvotesTask));
router.delete("/:id", ctrlWrapper(ctrl.deleteTask));

module.exports = router;
