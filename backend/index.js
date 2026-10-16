const express = require("express");
const cors = require("cors");
const config = require("./config/config");
const connectDB = require("./config/database");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const sportsRoutes = require("./routes/sportsRoutes");
const authRoutes = require("./routes/authRoutes");
const teamRoutes = require("./routes/teamRoutes");
const tournamentRoutes = require("./routes/tournamentRoutes");
const matchRoutes = require("./routes/matchRoutes");
const statsRoutes = require("./routes/statsRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  process.env.FRONTEND_URL,
  process.env.CORS_ORIGIN,
  config.corsOrigin,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (
        allowedOrigins.includes(origin) ||
        config.nodeEnv === "development"
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to SportsPro API",
    version: "1.0.0",
    endpoints: {
      auth: "/api/auth",
      teams: "/api/teams",
      sports: "/api/sports",
      tournaments: "/api/tournaments",
      matches: "/api/matches",
      stats: "/api/stats",
      contact: "/api/contact",
      health: "/api/health",
    },
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is healthy",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/sports", sportsRoutes);
app.use("/api/tournaments", tournamentRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/contact", contactRoutes);

app.use(errorHandler);

const server = app.listen(config.port, () => {
  console.log(
    `Server running in ${config.nodeEnv} mode on http://localhost:${config.port}`
  );
});

process.on("unhandledRejection", (err) => {
  console.error(`Unhandled rejection: ${err.message}`);
  server.close(() => process.exit(1));
});
