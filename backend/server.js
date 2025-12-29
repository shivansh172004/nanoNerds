const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// DB
const connectDB = require("./config/database");

// Routes
const authRoutes = require("./routes/auth");
const memberRoutes = require("./routes/members");
const contactRoutes = require("./routes/contact"); // ✅ ADD THIS

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ FULL CORS FIX (preflight included)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      process.env.CLIENT_URL,
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ THIS LINE FIXES PREFLIGHT
// app.options("*", cors());

// DB connect
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/contact", contactRoutes); // ✅ FIXED

// Root check
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
