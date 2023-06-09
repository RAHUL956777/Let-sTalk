import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.o9pukom.mongodb.net/`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database connection is sucessfull...");
  } catch (error) {
    console.log("Error while connecting database", error.message);
  }
};

export default Connection;
