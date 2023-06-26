const { Task } = require("../models");
const { NotFoundError } = require("../helpers/errors");

const findTasks = async () => {
  const tasks = await Task.find().populate(
    "owner",
    "_id name avatarURL"
  );
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



module.exports = { findTasks, removeTask, createTask, updateTaskById };
