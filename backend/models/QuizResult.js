import mongoose from "mongoose";

const quizResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  score: { type: Number, required: true },
  totalQuestions: Number,
  correctAnswers: Number,
  passed: Boolean,
  timeTaken: Number
}, { timestamps: true });

export default mongoose.model("QuizResult", quizResultSchema);