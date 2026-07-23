const express = require("express");

const router = express.Router();

const cardController = require("../controllers/card.controller");

// CREATE CARD
router.post("/", cardController.createCard);

// GET ALL CARD
router.get("/", cardController.getAllCards);

// GET CARD DETAIL
router.get("/:slug", cardController.getCardDetail);

// ADD VIDEO TO CARD
router.post("/:slug/videos", cardController.addVideoToCard);

module.exports = router;
