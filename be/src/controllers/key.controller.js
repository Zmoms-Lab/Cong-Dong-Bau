const { nanoid } = require("nanoid");
const mongoose = require("mongoose");

const RegistrationKey = require("../models/registrationKey.model");
const Card = require("../models/card.model");

const generateKey = async (req, res) => {
  try {
    const { quantity = 1 } = req.body;

    const keys = [];

    for (let i = 0; i < quantity; i++) {
      const key = `ZM-${nanoid(8).toUpperCase()}`;

      const newKey = await RegistrationKey.create({
        key,
        createdBy: req.user?._id || null,
      });

      keys.push(newKey);
    }

    res.status(201).json({
      success: true,
      data: keys,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getKeys = async (req, res) => {
  try {
    const keys = await RegistrationKey.find()
      .populate("usedBy", "name email")
      .populate("card", "title slug")
      .sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      data: keys,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteKey = async (req, res) => {
  try {
    const key = await RegistrationKey.findById(req.params.id);

    if (!key) {
      return res.status(404).json({
        success: false,
        message: "Key not found",
      });
    }

    if (key.status === "used") {
      return res.status(400).json({
        success: false,
        message: "Cannot delete used key",
      });
    }

    await key.deleteOne();

    res.json({
      success: true,
      message: "Key deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const activateKey = async (req, res) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const { key, cardId } = req.body;

    const user = req.user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const registrationKey = await RegistrationKey.findOne({
      key: key.trim().toUpperCase(),
      status: "unused",
      $or: [
        {
          expiredAt: null,
        },
        {
          expiredAt: {
            $gt: new Date(),
          },
        },
      ],
    }).session(session);

    if (!registrationKey) {
      return res.status(400).json({
        success: false,
        message: "Key không hợp lệ hoặc đã hết hạn",
      });
    }

    const card = await Card.findOne({
      _id: cardId,
      status: "active",
    }).session(session);

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card không tồn tại",
      });
    }

    const hasCard = user.cards.some(
      (id) => id.toString() === card._id.toString(),
    );

    if (hasCard) {
      return res.status(400).json({
        success: false,
        message: "Bạn đã sở hữu card này",
      });
    }

    registrationKey.status = "used";

    registrationKey.usedBy = user._id;

    registrationKey.card = card._id;

    registrationKey.usedAt = new Date();

    await registrationKey.save({
      session,
    });

    user.cards.push(card._id);

    user.registrationKeys.push(registrationKey._id);

    await user.save({
      session,
    });

    await session.commitTransaction();

    res.json({
      success: true,
      message: "Kích hoạt thành công",
      data: {
        card,
      },
    });
  } catch (error) {
    await session.abortTransaction();

    res.status(500).json({
      success: false,
      message: error.message,
    });
  } finally {
    session.endSession();
  }
};

module.exports = {
  generateKey,
  getKeys,
  deleteKey,
  activateKey,
};
