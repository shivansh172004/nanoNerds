import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: String,
  category: String,
  tags: [String],
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  authorName: String,
  isPublished: { type: Boolean, default: false },
  publishedDate: Date,
  likes: { type: Number, default: 0 },
  likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  comments: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    comment: String,
    date: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

export default mongoose.model("Post", postSchema);