const { nanoid } = require("nanoid");

const RegistrationKey = require("../models/registrationKey.model");

const generateKey = async (req, res) => {
  try {
    const { quantity = 1 } = req.body;

    const keys = [];

    for (let i = 0; i < quantity; i++) {
      const key = `ZM-${nanoid(8).toUpperCase()}`;

      const newKey = await RegistrationKey.create({
        key,
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
    const keys = await RegistrationKey.find().sort({
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

module.exports = {
  generateKey,
  getKeys,
  deleteKey,
};
