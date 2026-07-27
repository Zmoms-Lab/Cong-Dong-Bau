const express = require("express");

const {
  register,
  login,
  refresh,
  createAdmin,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", register);

router.post("/create-admin", createAdmin);

router.post("/login", login);

router.post("/refresh", refresh);

module.exports = router;
