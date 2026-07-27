const express = require("express");

const router = express.Router();

const userController = require("../controllers/user.controller");

const authMiddleware = require("../middlewares/auth.middleware");

router.get("/profile", authMiddleware, userController.getProfile);

router.put("/profile", authMiddleware, userController.updateProfile);

router.put("/change-password", authMiddleware, userController.changePassword);

router.get("/cards", authMiddleware, userController.getMyCards);

router.get("/keys", authMiddleware, userController.getMyKeys);

module.exports = router;
