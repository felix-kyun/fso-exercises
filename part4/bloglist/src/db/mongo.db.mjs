import mongoose from "mongoose";
import { MONGO_URI } from "../utils/config.mjs";
import { logSuccess, logError } from "../utils/logger.mjs";

export async function mongoConnect() {
  try {
    await mongoose.connect(MONGO_URI);
    logSuccess("Connected to MongoDB", "mongo");
  } catch (error) {
    logError("Error connecting to MongoDB", "mongo");
    process.exit(1);
  }
}

