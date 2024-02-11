const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// @desc Register user
// @route POST /api/users/register
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  console.log("Request body: ", req.body);

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please provide username, email and password");
  }

  const userAvailable = await User.findOne({ email });

  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists");
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  console.log("Hashed password: ", hashedPassword);

  const user = new User({
    username,
    email,
    password: hashedPassword,
  });

  const createdUser = await user.save();
  if (!createdUser) {
    res.status(400);
    throw new Error("User not created - Invalid Data");
  } else {
    res.status(201).json({
      message: "User registered",
      data: createdUser,
    });
  }
});

// @desc Login user
// @route POST /api/users/login
// @access Public

const loginUser = asyncHandler(async (req, res) => {
  console.log("Login Request body: ", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide email and password");
  }

  const user = await User.findOne({ email });

  // compare password with hashed password

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "15m",
      }
    );

    res.status(200).json({
      message: "User logged in",
      accessToken,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

// @desc Get current user
// @route GET /api/users/current
// @access Private

const getCurrentUser = asyncHandler(async (req, res) => {
  console.log("Current user fetched");
  res.status(200).json({
    message: "Current user fetched",
    data: req.user,
  });
});

module.exports = { registerUser, loginUser, getCurrentUser };
