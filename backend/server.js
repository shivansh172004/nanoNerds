
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/database.js";
import authRoutes from "./routes/auth.js";
import memberRoutes from "./routes/members.js";
import contactRoutes from "./routes/contact.js";
import teamRoutes from "./routes/team.js";
import quizRoutes from "./routes/quiz.js";



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    process.env.CLIENT_URL
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/quiz", quizRoutes);

app.get("/", (req, res) => res.send("NanoNerds API running ✅"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));