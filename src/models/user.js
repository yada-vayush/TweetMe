const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", (next) => {
  const user = this;
  const Salt = bcrypt.genSaltSync(9);
  const encryptedPassword = bcrypt.hashSync(user.password, Salt);
  user.password = encryptedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
