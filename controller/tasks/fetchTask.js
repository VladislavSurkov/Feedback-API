const { findTasks } = require("../../services/tasks");

const fetchTask = async (req, res, next) => {
  const tasks = await findTasks();

  res.json(tasks);
};

module.exports = { fetchTask };
