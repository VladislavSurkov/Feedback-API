const { toggleUpvote } = require("../../services/tasks");

const upvotesTask = async (req, res, next) => {
  const { userId } = req.body;
  const { id } = req.params;

  const task = await toggleUpvote(id, userId);
  res.json({
    task,
  });
};

module.exports = { upvotesTask };
