const express = require("express");
const cors = require("cors");

const keyRoutes = require("./routes/key.route");
const authRoutes = require("./routes/auth.route");

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);

  next();
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Video API running",
  });
});

app.use("/api/keys", keyRoutes);

app.use("/api/auth", authRoutes);

app.use((req, res) => {
  console.log("404 API not found:", req.method, req.originalUrl);

  res.status(404).json({
    success: false,
    message: "API not found",
  });
});

module.exports = app;
