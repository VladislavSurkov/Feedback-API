const { Schema, model, SchemaTypes } = require("mongoose");

const upvoteSchema = Schema(
  {
    taskId: {
      type: SchemaTypes.ObjectId,
      ref: "task",
      required: true,
    },
    userId: {
      type: SchemaTypes.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

const Upvote = model("upvote", upvoteSchema);

module.exports = {
  Upvote,
};
