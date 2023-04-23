const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    user_id : {
      type : mongoose.Schema.Types.ObjectId,
      required : true,
      ref : "User",
    },
    
    username: {
      type: String,
      required: [true, "please add your user name"],
    },
    email: {
      type: String,
      required: [true, "Please add your email"],
      unique: [true, "email already taken"],
    },
    password: {
      type: String,
      required: [true, "please add your password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
