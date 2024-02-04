const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [350, "Tweet cannot be more than 300 characters"],
    },
    hashtags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "HashTag",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
