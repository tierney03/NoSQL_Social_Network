const { Schema, model } = require("mongoose");
const reactionSchema = require("./reaction");
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    max_length: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => timestamp.toLocaleDateString(),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema],
});

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
