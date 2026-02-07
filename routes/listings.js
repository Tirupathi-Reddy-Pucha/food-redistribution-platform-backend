import express from "express";
import FoodListing from "../models/FoodListing.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const listing = new FoodListing(req.body);
  await listing.save();
  res.json(listing);
});

router.get("/", async (req, res) => {
  const listings = await FoodListing.find();
  res.json(listings);
});

export default router;
