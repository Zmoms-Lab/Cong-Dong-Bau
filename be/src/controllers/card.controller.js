const Card = require("../models/card.model");
const Video = require("../models/video.model");

exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find({
      status: "active",
    })
      .select("-videos")
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

exports.getMyCardDetail = async (req, res) => {
  try {
    const card = await Card.findById(req.card._id).populate({
      path: "videos",
      match: {
        status: "active",
      },
      options: {
        sort: {
          order: 1,
          createdAt: -1,
        },
      },
    });

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card không tồn tại",
      });
    }

    res.json({
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

    const card = await Card.findOne({
      slug: req.params.slug,
    });

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card không tồn tại",
      });
    }

    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video không tồn tại",
      });
    }

    const existed = card.videos.some(
      (id) => id.toString() === video._id.toString(),
    );

    if (!existed) {
      card.videos.push(video._id);
    }

    video.card = card._id;

    await card.save();
    await video.save();

    const updatedCard = await Card.findById(card._id).populate("videos");

    res.status(200).json({
      success: true,
      message: "Thêm video vào card thành công",
      data: updatedCard,
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

exports.updateCard = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      thumbnail,
      category,
      order,
      status,
      isFeatured,
    } = req.body;

    const card = await Card.findByIdAndUpdate(
      req.params.id,
      {
        title,
        slug,
        description,
        thumbnail,
        category,
        order,
        status,
        isFeatured,
      },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card không tồn tại",
      });
    }

    res.status(200).json({
      success: true,
      message: "Cập nhật card thành công",
      data: card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card không tồn tại",
      });
    }

    await card.deleteOne();

    res.json({
      success: true,
      message: "Xóa card thành công",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
