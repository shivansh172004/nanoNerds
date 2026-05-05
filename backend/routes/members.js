import express from "express";
import Member from "../models/Member.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

// POST - submit membership application (public)
router.post("/register", async (req, res) => {
  try {
    const newMember = await Member.create(req.body);
    res.status(201).json({ success: true, data: newMember });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET - all members (admin only)
router.get("/all", protect, authorize("admin", "moderator"), async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.json({ success: true, count: members.length, data: members });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;