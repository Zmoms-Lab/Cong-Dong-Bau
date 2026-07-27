const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const keyRoutes = require("./routes/key.route");
const authRoutes = require("./routes/auth.route");
const videoRoutes = require("./routes/video.route");
const cardRoutes = require("./routes/card.route");
const userRoutes = require("./routes/user.route");

const app = express();

const allowedOrigins = ["http://localhost:3000", process.env.CLIENT_URL].filter(
  Boolean,
);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS: Origin ${origin} không được phép`));
    },
    credentials: true,
  }),
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cookieParser());

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

app.use("/api/videos", videoRoutes);

app.use("/api/cards", cardRoutes);

app.use("/api/users", userRoutes);

app.use((req, res) => {
  console.log("404 API not found:", req.method, req.originalUrl);

  res.status(404).json({
    success: false,
    message: "API not found",
  });
});

module.exports = app;
