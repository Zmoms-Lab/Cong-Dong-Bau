const express = require("express");

const router = express.Router();

const cardController = require("../controllers/card.controller");

const authMiddleware = require("../middlewares/auth.middleware");
const roleMiddleware = require("../middlewares/role.middleware");
const cardAccessMiddleware = require("../middlewares/cardAccess.middleware");

router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  cardController.createCard,
);

router.patch(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  cardController.updateCard,
);

router.post(
  "/:slug/videos",
  authMiddleware,
  roleMiddleware("admin"),
  cardController.addVideoToCard,
);

router.get("/", cardController.getAllCards);

router.get(
  "/:slug",
  authMiddleware,
  cardAccessMiddleware,
  cardController.getMyCardDetail,
);

module.exports = router;
