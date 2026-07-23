const express = require("express");

const {
  generateKey,
  getKeys,
  deleteKey,
} = require("../controllers/key.controller");

const router = express.Router();

router.post("/generate", generateKey);

router.get("/", getKeys);

router.delete("/:id", deleteKey);

module.exports = router;
