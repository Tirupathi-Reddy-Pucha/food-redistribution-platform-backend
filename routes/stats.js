import express from "express";

const router = express.Router();

router.get("/global", (req, res) => {
  res.json({ users: 0, listings: 0 });
});

router.get("/leaderboard", (req, res) => {
  res.json([]);
});

export default router;
