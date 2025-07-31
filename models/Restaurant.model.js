const mongoose = require("mongoose");
const { Schema } = mongoose;

const STYLES_LIST = ["Mediterranean", "Asian", "American", "Healthy"];

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    style: {
      type: String,
      enum: STYLES_LIST,
      required: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
