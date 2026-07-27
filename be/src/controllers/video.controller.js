const Video = require("../models/video.model");
const Card = require("../models/card.model");

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({
      status: "active",
    }).sort({
      order: 1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: videos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getVideoDetail = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: req.video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createVideo = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      thumbnail,
      videoUrl,
      category,
      brand,
      duration,
      order,
      isFeatured,
    } = req.body;

    const existVideo = await Video.findOne({
      slug,
    });

    if (existVideo) {
      return res.status(400).json({
        success: false,
        message: "Slug video đã tồn tại",
      });
    }

    const video = await Video.create({
      title,
      slug,
      description,
      thumbnail,
      videoUrl,
      category,
      brand,
      duration,
      order,
      isFeatured,
    });

    res.status(201).json({
      success: true,
      message: "Tạo video thành công",
      data: video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateVideo = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video không tồn tại",
      });
    }

    res.json({
      success: true,
      message: "Cập nhật video thành công",
      data: video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video không tồn tại",
      });
    }

    await video.deleteOne();

    res.json({
      success: true,
      message: "Xóa video thành công",
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
    const { videoId, cardId } = req.body;

    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video không tồn tại",
      });
    }

    const card = await Card.findById(cardId);

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card không tồn tại",
      });
    }

    video.card = card._id;

    await video.save();

    const exists = card.videos.some(
      (id) => id.toString() === video._id.toString(),
    );

    if (!exists) {
      card.videos.push(video._id);
      await card.save();
    }

    res.json({
      success: true,
      message: "Gán video vào card thành công",
      data: video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.removeVideoFromCard = async (req, res) => {
  try {
    const { videoId } = req.body;

    const video = await Video.findById(videoId);

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video không tồn tại",
      });
    }

    if (!video.card) {
      return res.status(400).json({
        success: false,
        message: "Video chưa thuộc card nào",
      });
    }

    const card = await Card.findById(video.card);

    if (card) {
      card.videos = card.videos.filter(
        (id) => id.toString() !== video._id.toString(),
      );

      await card.save();
    }

    video.card = null;

    await video.save();

    res.json({
      success: true,
      message: "Gỡ video khỏi card thành công",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
