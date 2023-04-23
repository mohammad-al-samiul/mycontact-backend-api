const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add your name"],
    },
    email: {
      type: String,
      require: [true, "Please add your email"],
    },
    phone: {
      type: String,
      require: [true, "Please add your phone"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
