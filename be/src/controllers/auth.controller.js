const User = require("../models/user.model");
const RegistrationKey = require("../models/registrationKey.model");

const generateToken = require("../utils/jwt");

const register = async (req, res) => {
  try {
    const { key, name, email, password, phone } = req.body;

    const registerKey = await RegistrationKey.findOne({
      key: key.toUpperCase(),
      status: "unused",
    });

    if (!registerKey) {
      return res.status(400).json({
        success: false,
        message: "Invalid registration key",
      });
    }

    const existUser = await User.findOne({
      email,
    });

    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      phone,
    });

    registerKey.status = "used";
    registerKey.usedBy = user._id;
    registerKey.usedAt = new Date();

    await registerKey.save();

    res.status(201).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.status !== "active") {
      return res.status(403).json({
        success: false,
        message: "Account inactive",
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Wrong password",
      });
    }

    const token = generateToken(user);

    res.json({
      success: true,

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  register,
  login,
};
