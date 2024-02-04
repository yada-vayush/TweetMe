const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
  },
  { timestamps: true }
);

// hashtagSchema.pre("save", (next) => {
//   this.title = this.title.toLowerCase();
//   next();
// });

const HashTag = mongoose.model("HashTag", hashtagSchema);
module.exports = HashTag;
