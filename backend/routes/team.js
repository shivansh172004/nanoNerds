import express from "express";
import Team from "../models/Team.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const team = await Team.find({ isActive: true }).sort({ order: 1 });
    res.json({ success: true, count: team.length, data: team });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/", protect, authorize("admin"), async (req, res) => {
  try {
    const member = await Team.create(req.body);
    res.status(201).json({ success: true, data: member });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.put("/:id", protect, authorize("admin"), async (req, res) => {
  try {
    const member = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true, runValidators: true
    });
    if (!member) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: member });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.delete("/:id", protect, authorize("admin"), async (req, res) => {
  try {
    const member = await Team.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;