import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";

import authRoutes from "./routes/auth.js";
import listingRoutes from "./routes/listings.js";
import statsRoutes from "./routes/stats.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/stats", statsRoutes);

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
