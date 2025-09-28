// features/quiz.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [
    {
      id: 1,
      title: "Basic Electronics Quiz",
      description: "Test your knowledge of fundamental electronic concepts",
      category: "Electronics",
      difficulty: "Beginner",
      duration: 30, // minutes
      totalQuestions: 15,
      passingScore: 60,
      isActive: true,
      createdDate: "2024-09-01",
      questions: [
        {
          id: 1,
          question: "What is Ohm's Law?",
          options: ["V = I × R", "P = V × I", "Q = C × V", "f = 1/T"],
          correctAnswer: 0,
          explanation:
            "Ohm's Law states that voltage equals current times resistance.",
        },
        {
          id: 2,
          question: "Which component stores electrical energy?",
          options: ["Resistor", "Capacitor", "Inductor", "Diode"],
          correctAnswer: 1,
          explanation:
            "A capacitor stores electrical energy in an electric field.",
        },
      ],
    },
    {
      id: 2,
      title: "GATE ECE Mock Test",
      description:
        "Practice test for GATE Electronics and Communication Engineering",
      category: "GATE",
      difficulty: "Advanced",
      duration: 60,
      totalQuestions: 25,
      passingScore: 70,
      isActive: true,
      createdDate: "2024-09-15",
      questions: [
        {
          id: 1,
          question: "The Nyquist sampling theorem states that:",
          options: [
            "Sampling frequency should be at least twice the highest frequency",
            "Sampling frequency should be equal to the highest frequency",
            "Sampling frequency should be less than the highest frequency",
            "Sampling frequency is independent of signal frequency",
          ],
          correctAnswer: 0,
          explanation:
            "Nyquist theorem requires sampling frequency ≥ 2 × highest frequency component.",
        },
      ],
    },
  ],
  currentQuiz: null,
  userAnswers: {},
  quizResults: [],
  userScores: [],
  loading: false,
  error: null,
  timer: 0,
  isQuizActive: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setQuizzes: (state, action) => {
      state.quizzes = action.payload;
      state.loading = false;
      state.error = null;
    },
    addQuiz: (state, action) => {
      state.quizzes.push(action.payload);
    },
    updateQuiz: (state, action) => {
      const index = state.quizzes.findIndex(
        (quiz) => quiz.id === action.payload.id
      );
      if (index !== -1) {
        state.quizzes[index] = action.payload;
      }
    },
    deleteQuiz: (state, action) => {
      state.quizzes = state.quizzes.filter(
        (quiz) => quiz.id !== action.payload
      );
    },
    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
      state.userAnswers = {};
      state.isQuizActive = true;
      state.timer = action.payload ? action.payload.duration * 60 : 0; // Convert to seconds
    },
    setUserAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.userAnswers[questionId] = answer;
    },
    submitQuiz: (state, action) => {
      const result = action.payload;
      state.quizResults.push(result);
      state.userScores.push({
        quizId: state.currentQuiz.id,
        score: result.score,
        date: new Date().toISOString(),
        totalQuestions: result.totalQuestions,
        correctAnswers: result.correctAnswers,
      });
      state.isQuizActive = false;
      state.currentQuiz = null;
      state.userAnswers = {};
      state.timer = 0;
    },
    updateTimer: (state, action) => {
      state.timer = action.payload;
      if (state.timer <= 0) {
        state.isQuizActive = false;
      }
    },
    resetQuiz: (state) => {
      state.currentQuiz = null;
      state.userAnswers = {};
      state.isQuizActive = false;
      state.timer = 0;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setLoading,
  setQuizzes,
  addQuiz,
  updateQuiz,
  deleteQuiz,
  setCurrentQuiz,
  setUserAnswer,
  submitQuiz,
  updateTimer,
  resetQuiz,
  setError,
} = quizSlice.actions;

export default quizSlice.reducer;
