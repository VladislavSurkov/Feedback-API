const { Schema, model, SchemaTypes } = require("mongoose");

const commentsSchema = Schema(
  {
    content: {
      type: String,
      required: true,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

const Comments = model("comments", commentsSchema);
module.exports = {
  Comments,
};
