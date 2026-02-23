import dotenv from "dotenv";
import connectDB from "../config/db.js";

dotenv.config();
connectDB();

console.log("Database seed script ready.");
process.exit();