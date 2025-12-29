const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// PUBLIC: submit contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
});

module.exports = router;
