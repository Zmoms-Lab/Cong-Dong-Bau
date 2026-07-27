const express = require("express");

const {
  register,
  login,
  refresh,
  me,
  createAdmin,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", register);

router.post("/create-admin", createAdmin);

router.post("/login", login);

router.post("/refresh", refresh);

router.get("/me", authMiddleware, me);
module.exports = router;
