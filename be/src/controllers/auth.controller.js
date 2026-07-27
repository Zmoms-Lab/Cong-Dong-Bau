const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const RegistrationKey = require("../models/registrationKey.model");

const generateAccessToken = require("../utils/accessToken");
const generateRefreshToken = require("../utils/refreshToken");

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
      email: email.toLowerCase(),
    });

    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "Register success. Please activate your key.",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        needActivateCard: true,
        keyId: registerKey._id,
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
      email: email.toLowerCase(),
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

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
      accessToken,
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

const refresh = async (req, res) => {
  try {
    const token = req.cookies.refreshToken;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No refresh token",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    const accessToken = generateAccessToken(user);

    res.json({
      success: true,
      accessToken,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Invalid refresh token",
    });
  }
};

const me = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createAdmin = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    const existUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const admin = await User.create({
      name,
      email: email.toLowerCase(),
      password,
      phone,
      role: "admin",
      status: "active",
    });

    res.status(201).json({
      success: true,
      message: "Admin created successfully",
      data: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
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
  refresh,
  me,
  createAdmin,
};
