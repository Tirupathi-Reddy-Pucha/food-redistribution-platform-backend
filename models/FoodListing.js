const mongoose = require("mongoose");

const FoodListingSchema = new mongoose.Schema({
  title: String,
  description: String,
  expiryDate: Date,
  isSafe: Boolean,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FoodListing", FoodListingSchema);
