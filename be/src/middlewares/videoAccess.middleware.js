const Video = require("../models/video.model");

const videoAccessMiddleware = async (req, res, next) => {
  try {
    const video = await Video.findOne({
      slug: req.params.slug,
      status: "active",
    });

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video không tồn tại",
      });
    }

    if (!video.card) {
      return res.status(400).json({
        success: false,
        message: "Video chưa được gắn vào card",
      });
    }

    const user = req.user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const hasCard = user.cards.some(
      (cardId) => cardId.toString() === video.card.toString(),
    );

    if (!hasCard) {
      return res.status(403).json({
        success: false,
        message: "Bạn chưa có quyền xem video này",
      });
    }

    req.video = video;

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = videoAccessMiddleware;
