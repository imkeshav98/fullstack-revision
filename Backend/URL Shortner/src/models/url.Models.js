const mongoose = require("mongoose");
const shortid = require("shortid");

const urlSchema = new mongoose.Schema(
  {
    actual: { type: String, required: true },
    short: {
      type: String,
      required: true,
      unique: true,
      default: shortid.generate,
    },
    clicks: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UrlModel = mongoose.model("url", urlSchema);

module.exports = UrlModel;
