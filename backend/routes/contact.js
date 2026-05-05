import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const contact = await Contact.create({ name, email, subject, message });
    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;