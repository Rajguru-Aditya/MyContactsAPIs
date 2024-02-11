const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  console.log("Register Request body: ", req.body);
  res.status(200).json({
    message: "User registered",
  });
});

router.post("/login", (req, res) => {
  console.log("Login Request body: ", req.body);
  res.status(200).json({
    message: "User logged in",
  });
});

router.get("/current", (req, res) => {
  console.log("Current user fetched");
  res.status(200).json({
    message: "Current user fetched",
  });
});

module.exports = router;
