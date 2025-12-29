const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ success: true });
});

router.post("/register", (req, res) => {
  res.json({ success: true });
});

module.exports = router;
