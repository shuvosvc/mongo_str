const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Authority = new Schema(
  {
    name: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
      enum: ["admin", "coadmin", "user"],
    },

    company: {
      type: mongoose.Types.ObjectId,
      ref: "Company",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Authority", Authority);
