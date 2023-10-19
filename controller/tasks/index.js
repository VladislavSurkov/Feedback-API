const { fetchTask } = require("./fetchTask");
const { addTask } = require("./addTask");
const { deleteTask } = require("./deleteTask");
const { updateTask } = require('./updateTask')
const { upvotesTask } = require("./upvotes");


module.exports = { fetchTask, addTask, deleteTask, updateTask, upvotesTask };
