const Card = require("../models/card.model");

// GET ALL CARD

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find({
      status: "active",
    })
      .populate("videos")
      .sort({
        order: 1,
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      data: cards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET CARD DETAIL BY SLUG

exports.getCardDetail = async (req, res) => {
  try {
    const card = await Card.findOne({
      slug: req.params.slug,
    }).populate("videos");

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card không tồn tại",
      });
    }

    res.status(200).json({
      success: true,
      data: card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addVideoToCard = async (req, res) => {
  try {
    const { videoId } = req.body;

    const card = await Card.findOneAndUpdate(
      {
        slug: req.params.slug,
      },
      {
        $addToSet: {
          videos: videoId,
        },
      },
      {
        new: true,
      },
    ).populate("videos");

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card không tồn tại",
      });
    }

    res.status(200).json({
      success: true,
      message: "Thêm video vào card thành công",
      data: card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createCard = async (req, res) => {
  try {
    const { title, slug, description, thumbnail, category, order, isFeatured } =
      req.body;

    const card = await Card.create({
      title,
      slug,
      description,
      thumbnail,
      category,
      order,
      isFeatured,

      // tạo card rỗng video
      videos: [],
    });

    res.status(201).json({
      success: true,
      message: "Tạo card thành công",
      data: card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
