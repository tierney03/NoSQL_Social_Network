const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      max_length: 30,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    thoughts: [],
    friends: [],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
