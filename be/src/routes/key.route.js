const express = require("express");

const {
  generateKey,
  getKeys,
  deleteKey,
  activateKey,
} = require("../controllers/key.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");

const router = express.Router();

router.post("/generate", authMiddleware, roleMiddleware("admin"), generateKey);

router.get("/", authMiddleware, roleMiddleware("admin"), getKeys);

router.delete("/:id", authMiddleware, roleMiddleware("admin"), deleteKey);

router.post("/activate", authMiddleware, activateKey);

module.exports = router;
