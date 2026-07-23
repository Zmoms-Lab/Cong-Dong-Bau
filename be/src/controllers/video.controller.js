const Video = require("../models/video.model");

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
    const video = await Video.findOne({
      slug: req.params.slug,
    });

    if (!video) {
      return res.status(404).json({
        success: false,
        message: "Video không tồn tại",
      });
    }

    res.status(200).json({
      success: true,
      data: video,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
