require("dotenv").config();

const nodeEnv = process.env.NODE_ENV || "development";
const jwtSecret = process.env.JWT_SECRET;

if (nodeEnv === "production" && !jwtSecret) {
  console.error("Fatal: JWT_SECRET must be set when NODE_ENV=production");
  process.exit(1);
}

const config = {
  port: process.env.PORT || 3001,
  nodeEnv,
  mongodbUri:
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sportspro",
  jwtSecret: jwtSecret || "dev-only-change-me",
  jwtExpire: process.env.JWT_EXPIRE || "7d",
  corsOrigin:
    process.env.CORS_ORIGIN ||
    process.env.FRONTEND_URL ||
    "http://localhost:5173",
};

module.exports = config;
