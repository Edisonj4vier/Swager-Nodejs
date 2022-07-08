import { config } from "dotenv";
config();

export const MONGODB_URI = process.env.ONGODB_URI || "mongodb://127.0.0.1:27017/videogamesdb";
export const PORT = process.env.PORT || 3000;
