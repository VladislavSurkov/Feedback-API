const { Task, Upvote } = require("../models");
const { NotFoundError } = require("../helpers/errors");

const findTasks = async () => {
  const tasks = await Task.find().populate("owner", "_id name avatarURL");
  if (!tasks) throw new NotFoundError(`Not found task`);

  return tasks;
};

const removeTask = async (id) => {
  const task = await Task.findByIdAndRemove(id);
  if (!task) throw new NotFoundError(`Not found task id: ${id}`);

  return task;
};

const createTask = async (body) => {
  const newTask = await Task.create(body);

  return newTask;
};

const updateTaskById = async (id, body) => {
  const task = await Task.findByIdAndUpdate(
    id,
    { ...body },
    { new: true }
  ).populate("owner", "_id name avatarURL");

  if (!task) throw new NotFoundError(`Not found task id: ${id}`);
  return task;
};

const toggleUpvote = async (taskId, userId) => {
  const upvote = await Upvote.findOne({ taskId, userId });

  if (!taskId) throw new NotFoundError(`Not found task`);
  if (!userId) throw new NotFoundError(`Not found user`);

  if (!upvote) {
    await Upvote.create({ taskId, userId });

    const task = await Task.findByIdAndUpdate(
      taskId,
      { $inc: { upvotes: +1 } },
      { new: true }
    );

    return task;
  } else {
    await Upvote.findOneAndDelete({ taskId, userId });

    const task = await Task.findByIdAndUpdate(
      taskId,
      { $inc: { upvotes: -1 } },
      { new: true }
    );

    return task;
  }
};

module.exports = {
  findTasks,
  removeTask,
  createTask,
  updateTaskById,
  toggleUpvote,
};
