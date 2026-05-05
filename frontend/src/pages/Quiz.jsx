import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../api/config.js";
import { addResult } from "../features/quiz/quiz.js";

export default function Quiz() {
  const { darkMode } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // States
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(null);
  const [startTime, setStartTime] = useState(null);

  // Fetch all quizzes
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const res = await api.get("/quiz");
        setQuizzes(res.data.data || []);
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes();
  }, []);

  // Timer countdown
  useEffect(() => {
    if (!selectedQuiz || submitted) return;
    setTimeLeft(selectedQuiz.duration * 60);
    setStartTime(Date.now());
  }, [selectedQuiz]);

  useEffect(() => {
    if (timeLeft === null || submitted) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, submitted]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleStartQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setAnswers(new Array(quiz.questions.length).fill(null));
    setCurrentQuestion(0);
    setSubmitted(false);
    setResult(null);
  };

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    const timeTaken = startTime
      ? Math.round((Date.now() - startTime) / 1000)
      : 0;

    try {
      if (user) {
        // Save to DB if logged in
        const res = await api.post(`/quiz/${selectedQuiz._id}/submit`, {
          answers,
          timeTaken,
        });
        setResult(res.data.data);
        dispatch(addResult(res.data.data));
      } else {
        // Calculate locally if not logged in
        let correct = 0;
        selectedQuiz.questions.forEach((q, i) => {
          if (answers[i] === q.correctAnswer) correct++;
        });
        const score = Math.round(
          (correct / selectedQuiz.questions.length) * 100
        );
        setResult({
          score,
          correctAnswers: correct,
          totalQuestions: selectedQuiz.questions.length,
          passed: score >= (selectedQuiz.passingScore || 60),
          timeTaken,
        });
      }
    } catch (error) {
      console.error("Submit failed:", error);
    } finally {
      setSubmitted(true);
    }
  };

  // ── SCREENS ──

  // Loading
  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}>
        <p className={darkMode ? "text-white" : "text-gray-700"}>
          Loading quizzes...
        </p>
      </div>
    );
  }

  // Result Screen
  if (submitted && result) {
    return (
      <div className={`min-h-screen flex items-center justify-center px-4 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}>
        <div className={`w-full max-w-md p-8 rounded-2xl shadow-lg text-center ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}>
          <div className="text-6xl mb-4">
            {result.passed ? "🎉" : "😔"}
          </div>
          <h2 className={`text-3xl font-bold mb-2 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            {result.passed ? "You Passed!" : "Better Luck Next Time!"}
          </h2>

          <div className={`text-6xl font-bold my-6 ${
            result.passed ? "text-green-500" : "text-red-500"
          }`}>
            {result.score}%
          </div>

          <div className={`space-y-2 mb-6 text-sm ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}>
            <p>✅ Correct: {result.correctAnswers} / {result.totalQuestions}</p>
            <p>⏱️ Time: {Math.floor(result.timeTaken / 60)}m {result.timeTaken % 60}s</p>
            <p>🎯 Passing Score: {selectedQuiz.passingScore}%</p>
          </div>

          {!user && (
            <p className="text-orange-500 text-sm mb-4">
              Login to save your results!
            </p>
          )}

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => handleStartQuiz(selectedQuiz)}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
            >
              Try Again
            </button>
            <button
              onClick={() => setSelectedQuiz(null)}
              className="px-5 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition"
            >
              All Quizzes
            </button>
            {user && (
              <button
                onClick={() => navigate("/dashboard")}
                className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
              >
                Dashboard
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Quiz Taking Screen
  if (selectedQuiz) {
    const question = selectedQuiz.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / selectedQuiz.questions.length) * 100;
    const isLast = currentQuestion === selectedQuiz.questions.length - 1;

    return (
      <div className={`min-h-screen py-10 px-4 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}>
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              {selectedQuiz.title}
            </h2>
            {/* Timer */}
            <div className={`px-4 py-2 rounded-lg font-mono font-bold text-lg ${
              timeLeft < 60
                ? "bg-red-100 text-red-600"
                : "bg-blue-100 text-blue-600"
            }`}>
              ⏱️ {formatTime(timeLeft)}
            </div>
          </div>

          {/* Progress Bar */}
          <div className={`w-full rounded-full h-2 mb-6 ${
            darkMode ? "bg-gray-700" : "bg-gray-200"
          }`}>
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question Card */}
          <div className={`p-6 rounded-2xl shadow mb-6 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <p className={`text-sm mb-2 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}>
              Question {currentQuestion + 1} of {selectedQuiz.questions.length}
            </p>
            <h3 className={`text-xl font-semibold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}>
              {question.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                    answers[currentQuestion] === idx
                      ? "border-blue-500 bg-blue-50 text-blue-700 font-semibold"
                      : darkMode
                      ? "border-gray-600 bg-gray-700 text-gray-200 hover:border-blue-400"
                      : "border-gray-200 bg-gray-50 text-gray-700 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  <span className="font-bold mr-3">
                    {String.fromCharCode(65 + idx)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className="px-5 py-2 bg-gray-500 hover:bg-gray-600 disabled:opacity-40 text-white rounded-lg font-medium transition"
            >
              ← Previous
            </button>

            {/* Question dots */}
            <div className="flex gap-1">
              {selectedQuiz.questions.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestion(idx)}
                  className={`w-3 h-3 rounded-full transition ${
                    idx === currentQuestion
                      ? "bg-blue-600"
                      : answers[idx] !== null
                      ? "bg-green-500"
                      : darkMode
                      ? "bg-gray-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {isLast ? (
              <button
                onClick={handleSubmit}
                className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
              >
                Submit ✓
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Quiz List Screen
  return (
    <div className={`min-h-screen py-12 px-4 ${
      darkMode ? "bg-gray-900" : "bg-gray-50"
    }`}>
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}>
            🧠 ECE Quizzes
          </h1>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Test your electronics knowledge!
          </p>
        </div>

        {/* Quiz Cards */}
        {quizzes.length === 0 ? (
          <div className={`text-center p-12 rounded-2xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}>
            <p className="text-4xl mb-4">📭</p>
            <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
              No quizzes available yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quizzes.map((quiz) => (
              <div
                key={quiz._id}
                className={`p-6 rounded-2xl shadow-md transition hover:scale-105 ${
                  darkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}>
                    {quiz.title}
                  </h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    quiz.difficulty === "Easy"
                      ? "bg-green-100 text-green-700"
                      : quiz.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {quiz.difficulty}
                  </span>
                </div>

                <p className={`text-sm mb-4 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  {quiz.description}
                </p>

                <div className={`flex gap-4 text-sm mb-5 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}>
                  <span>❓ {quiz.questions.length} questions</span>
                  <span>⏱️ {quiz.duration} mins</span>
                  <span>🎯 Pass: {quiz.passingScore}%</span>
                </div>

                <button
                  onClick={() => handleStartQuiz(quiz)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
                >
                  Start Quiz →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}