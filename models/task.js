const { Schema, model, SchemaTypes } = require("mongoose");

const taskSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "Set title"],
    },
    category: {
      type: String,
      enum: ["Feature", "Bug", "UX", "UI", "Enhancement"],
      required: [true, "Choose category"],
    },
    status: {
      type: String,
      enum: ["Planned", "In-Progress", "Live"],
      default: "Planned",
    },
    description: {
      type: String,
      required: [true, "Set description"],
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
    comments: {
      type: SchemaTypes.ObjectId,
      ref: "comments",
    },
  },
  { versionKey: false }
);

const Task = model("task", taskSchema);
module.exports = {
  Task,
};
