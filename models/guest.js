const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guestSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    address: {
      type: String,
    },
    registrationDate: Date,
    checkInDate: Date,
    phoneNumber: {
      type: Number,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: String,
    userAvatar: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Guest", guestSchema);
