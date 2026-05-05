import express from "express";
import Quiz from "../models/Quiz.js";
import QuizResult from "../models/QuizResult.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

// GET all quizzes
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find({ isActive: true });
    res.json({ success: true, data: quizzes });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET single quiz
router.get("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ success: false, message: "Quiz not found" });
    res.json({ success: true, data: quiz });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// POST submit quiz result
router.post("/:id/submit", protect, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ success: false, message: "Quiz not found" });

    const { answers, timeTaken } = req.body;

    // Calculate score
    let correctAnswers = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswer) correctAnswers++;
    });

    const score = Math.round((correctAnswers / quiz.questions.length) * 100);
    const passed = score >= (quiz.passingScore || 50);

    const result = await QuizResult.create({
      user: req.user._id,
      quiz: quiz._id,
      score,
      totalQuestions: quiz.questions.length,
      correctAnswers,
      passed,
      timeTaken
    });

    res.status(201).json({
      success: true,
      data: {
        score,
        correctAnswers,
        totalQuestions: quiz.questions.length,
        passed,
        result
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET my quiz results
router.get("/results/me", protect, async (req, res) => {
  try {
    const results = await QuizResult.find({ user: req.user._id })
      .populate("quiz", "title category");
    res.json({ success: true, data: results });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;