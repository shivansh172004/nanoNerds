// features/posts.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {
      id: 1,
      title: "Introduction to VLSI Design Fundamentals",
      excerpt: "Understanding the basics of Very Large Scale Integration and its applications in modern electronics.",
      content: "VLSI design is the process of creating integrated circuits by combining thousands or millions of MOS transistors onto a single chip...",
      author: "Dr. Rajesh Kumar",
      date: "2024-09-15",
      category: "VLSI",
      tags: ["vlsi", "design", "fundamentals"],
      image: "/api/placeholder/600/300",
      readTime: "8 min read",
      likes: 42,
      comments: 12
    },
    {
      id: 2,
      title: "GATE 2025: Electronics and Communication Preparation Strategy",
      excerpt: "Complete roadmap and tips for GATE ECE preparation with recommended books and study plan.",
      content: "GATE preparation requires a systematic approach. Here's a comprehensive strategy for ECE students...",
      author: "Prof. Anita Sharma",
      date: "2024-09-20",
      category: "GATE",
      tags: ["gate", "ece", "preparation", "study-plan"],
      image: "/api/placeholder/600/300",
      readTime: "12 min read",
      likes: 78,
      comments: 23
    },
    {
      id: 3,
      title: "Building Your First Arduino Project: Smart Home Automation",
      excerpt: "Step-by-step guide to create a basic smart home system using Arduino and various sensors.",
      content: "Arduino has revolutionized the way we approach embedded systems projects. In this tutorial...",
      author: "Rohan Mehta",
      date: "2024-09-25",
      category: "Projects",
      tags: ["arduino", "iot", "smart-home", "embedded"],
      image: "/api/placeholder/600/300",
      readTime: "15 min read",
      likes: 95,
      comments: 31
    }
  ],
  currentPost: null,
  loading: false,
  error: null,
  filters: {
    category: 'all',
    tag: 'all',
    sortBy: 'date'
  }
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
    likePost: (state, action) => {
      const post = state.posts.find(post => post.id === action.payload);
      if (post) {
        post.likes += 1;
      }
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { 
  setLoading, 
  setPosts, 
  addPost, 
  updatePost, 
  deletePost, 
  setCurrentPost, 
  likePost, 
  setFilters, 
  setError 
} = postsSlice.actions;

export default postsSlice.reducer;


