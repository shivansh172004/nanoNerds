const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define Schema for the nanonerds collection
const memberSchema = new mongoose.Schema({
  name: String,
  email: String,
  rollNumber: String,
  phone: String,
  year: String,
  branch: String,
  interests: [String],
  motivation: String,
  status: { type: String, default: 'pending' },
  appliedDate: String
});

const Member = mongoose.model('Member', memberSchema);

// ✅ This handles: POST http://localhost:5000/api/members/register
router.post('/register', async (req, res) => {
  try {
    const newMember = new Member(req.body);
    const savedMember = await newMember.save();
    res.status(201).json({ success: true, data: savedMember });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;