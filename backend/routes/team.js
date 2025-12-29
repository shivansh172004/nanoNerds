// routes/team.js
const express = require('express');
const router = express.Router();
const Team = require('../models/Team');
const { protect, authorize } = require('../middleware/auth');

// @route   GET /api/team
// @desc    Get all team members
// @access  Public
router.get('/', async (req, res) => {
  try {
    const team = await Team.find({ isActive: true }).sort({ order: 1 });
    
    res.json({
      success: true,
      count: team.length,
      data: team
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   GET /api/team/:id
// @desc    Get single team member
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);
    
    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found'
      });
    }
    
    res.json({
      success: true,
      data: member
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   POST /api/team
// @desc    Add team member
// @access  Private/Admin
router.post('/', protect, authorize('admin'), async (req, res) => {
  try {
    const member = await Team.create(req.body);

    res.status(201).json({
      success: true,
      data: member
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   PUT /api/team/:id
// @desc    Update team member
// @access  Private/Admin
router.put('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const member = await Team.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found'
      });
    }

    res.json({
      success: true,
      data: member
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   DELETE /api/team/:id
// @desc    Delete team member
// @access  Private/Admin
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const member = await Team.findByIdAndDelete(req.params.id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Team member not found'
      });
    }

    res.json({
      success: true,
      message: 'Team member deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;
