// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const { protect, authorize } = require('../middleware/auth');

// @route   GET /api/posts
// @desc    Get all posts
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, tag, author, search } = req.query;
    
    let query = { isPublished: true };
    
    if (category) query.category = category;
    if (tag) query.tags = { $in: [tag] };
    if (author) query.author = author;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { excerpt: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    const posts = await Post.find(query)
      .populate('author', 'name email')
      .sort({ publishedDate: -1 })
      .select('-content'); // Exclude full content in list view

    res.json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   GET /api/posts/:id
// @desc    Get single post
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'name email')
      .populate('comments.user', 'name');

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   POST /api/posts
// @desc    Create new post
// @access  Private/Admin/Moderator
router.post('/', protect, authorize('admin', 'moderator'), async (req, res) => {
  try {
    const post = await Post.create({
      ...req.body,
      author: req.user.id,
      authorName: req.user.name
    });

    res.status(201).json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   PUT /api/posts/:id
// @desc    Update post
// @access  Private/Admin/Moderator/Owner
router.put('/:id', protect, async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    // Check if user is owner or admin
    if (post.author.toString() !== req.user.id && !['admin', 'moderator'].includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this post'
      });
    }

    post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedAt: Date.now()
      },
      {
        new: true,
        runValidators: true
      }
    );

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   DELETE /api/posts/:id
// @desc    Delete post
// @access  Private/Admin
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.json({
      success: true,
      message: 'Post deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   PUT /api/posts/:id/publish
// @desc    Publish/unpublish post
// @access  Private/Admin/Moderator
router.put('/:id/publish', protect, authorize('admin', 'moderator'), async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        isPublished: req.body.isPublished,
        publishedDate: req.body.isPublished ? Date.now() : null
      },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    res.json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   PUT /api/posts/:id/like
// @desc    Like/unlike post
// @access  Private
router.put('/:id/like', protect, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    // Check if already liked
    const alreadyLiked = post.likedBy.some(
      userId => userId.toString() === req.user.id
    );

    if (alreadyLiked) {
      // Unlike
      post.likedBy = post.likedBy.filter(
        userId => userId.toString() !== req.user.id
      );
      post.likes -= 1;
    } else {
      // Like
      post.likedBy.push(req.user.id);
      post.likes += 1;
    }

    await post.save();

    res.json({
      success: true,
      data: {
        likes: post.likes,
        liked: !alreadyLiked
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   POST /api/posts/:id/comment
// @desc    Add comment to post
// @access  Private
router.post('/:id/comment', protect, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    const newComment = {
      user: req.user.id,
      name: req.user.name,
      comment: req.body.comment
    };

    post.comments.unshift(newComment);
    await post.save();

    res.json({
      success: true,
      data: post.comments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   DELETE /api/posts/:id/comment/:commentId
// @desc    Delete comment
// @access  Private
router.delete('/:id/comment/:commentId', protect, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }

    const comment = post.comments.id(req.params.commentId);

    if (!comment) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found'
      });
    }

    // Check if user owns comment or is admin
    if (comment.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this comment'
      });
    }

    comment.remove();
    await post.save();

    res.json({
      success: true,
      data: post.comments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @route   GET /api/posts/category/:category
// @desc    Get posts by category
// @access  Public
router.get('/category/:category', async (req, res) => {
  try {
    const posts = await Post.find({
      category: req.params.category,
      isPublished: true
    })
      .populate('author', 'name email')
      .sort({ publishedDate: -1 })
      .select('-content');

    res.json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;