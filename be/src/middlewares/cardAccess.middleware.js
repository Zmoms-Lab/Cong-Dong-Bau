const Card = require("../models/card.model");

const cardAccessMiddleware = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const card = await Card.findOne({
      slug,
      status: "active",
    });

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card không tồn tại",
      });
    }

    const user = req.user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const hasAccess = user.cards.some(
      (cardId) => cardId.toString() === card._id.toString(),
    );

    if (!hasAccess) {
      return res.status(403).json({
        success: false,
        message: "Bạn chưa sở hữu card này",
      });
    }

    req.card = card;

    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = cardAccessMiddleware;
