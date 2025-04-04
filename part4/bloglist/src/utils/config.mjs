import { config } from "dotenv";

const extension = {
  development: ".env.development",
  production: ".env",
  test: ".env.test",
};
const mode = process.env.NODE_ENV || "development";

config({ path: extension[mode] });

export const PORT = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI;
