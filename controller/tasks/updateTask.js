const { updateTaskById } = require("../../services/tasks");


const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;
  


  const result = await updateTaskById(id, { ...body });
  res.json({
    status: "success",
    message: "Task updated",
    code: 200,
    data: result,
  });
};

module.exports = {
  updateTask,
};
