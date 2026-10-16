const mongoose = require("mongoose");
const config = require("./config");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongodbUri);
    console.log(
      `MongoDB connected: ${conn.connection.host} / ${conn.connection.name}`
    );
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    console.error(
      "Start MongoDB locally, then in Compass connect to mongodb://127.0.0.1:27017 and create database `sportspro`."
    );
    console.error("Set MONGODB_URI in backend/.env if you use a different host.");
    process.exit(1);
  }
};

module.exports = connectDB;
