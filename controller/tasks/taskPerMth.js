const { findTasks } = require("../../services/tasks");

const taskPerMth = async (req, res, next) => {
  const { _id } = req.user;

  const tasks = await findTasks(_id);

  res.json(tasks);
};

module.exports = { taskPerMth };
