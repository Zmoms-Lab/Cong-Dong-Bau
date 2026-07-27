const express = require("express");

const router = express.Router();

const videoController = require("../controllers/video.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const videoAccessMiddleware = require("../middlewares/videoAccess.middleware");

router.get("/", videoController.getAllVideos);

router.get(
  "/:slug",
  authMiddleware,
  videoAccessMiddleware,
  videoController.getVideoDetail,
);

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  videoController.createVideo,
);

router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  videoController.updateVideo,
);

router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  videoController.deleteVideo,
);

router.post(
  "/add-to-card",
  authMiddleware,
  roleMiddleware("admin"),
  videoController.addVideoToCard,
);

router.post(
  "/remove-from-card",
  authMiddleware,
  roleMiddleware("admin"),
  videoController.removeVideoFromCard,
);

module.exports = router;
