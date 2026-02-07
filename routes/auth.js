import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  let user = new User({ name, email, password });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  await user.save();
  res.json(user);
});

// Login
router.post("/login", async (req, res) => {
  res.json({ msg: "Login endpoint" });
});

// Update profile
router.put("/profile", (req, res) => {
  res.json({ msg: "Profile updated" });
});

// Delete account
router.delete("/delete", (req, res) => {
  res.json({ msg: "Account deleted" });
});

export default router;
