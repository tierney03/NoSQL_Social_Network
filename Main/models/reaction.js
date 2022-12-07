const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: String,
  },
  reactionBody: {
    type: String,
    required: true,
    max_length: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => timestamp.toLocaleDateString(),
  },
});

reactionSchema.virtual("thoughtCount").get(function () {
  return this.thoughts.length;
});

module.exports = Reaction;
