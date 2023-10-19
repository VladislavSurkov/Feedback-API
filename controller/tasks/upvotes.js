const { toggleUpvote } = require("../../services/tasks");

const upvotesTask = async (req, res, next) => {
  const userId = req.user.id;
  const taskid = req.params.id;

  const task = await toggleUpvote(taskid, userId);
  res.json({
    task,
  });
};

module.exports = { upvotesTask };
