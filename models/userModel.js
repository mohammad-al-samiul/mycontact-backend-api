const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "please add your user name"],
    },
    email: {
      type: String,
      require: [true, "Please add your email"],
      unique: [true, "email already taken"],
    },
    password: {
      type: String,
      require: [true, "please add your password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
