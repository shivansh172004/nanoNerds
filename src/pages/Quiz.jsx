// pages/Quiz.jsx
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentQuiz,
  setUserAnswer,
  submitQuiz,
  updateTimer,
  resetQuiz,
} from "../features/quiz/quiz.js";
import {
  Clock,
  Play,
  CheckCircle,
  XCircle,
  Trophy,
  BarChart3,
  Brain,
  Timer,
  Award,
  Target,
} from "lucide-react";

const Quiz = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);
  const { quizzes, currentQuiz, userAnswers, timer, isQuizActive, userScores } =
    useSelector((state) => state.quiz);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizResults, setQuizResults] = useState(null);

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isQuizActive && timer > 0) {
      interval = setInterval(() => {
        dispatch(updateTimer(timer - 1));
      }, 1000);
    } else if (timer === 0 && isQuizActive) {
      handleSubmitQuiz();
    }
    return () => clearInterval(interval);
  }, [isQuizActive, timer, dispatch]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const startQuiz = (quiz) => {
    dispatch(setCurrentQuiz(quiz));
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setQuizResults(null);
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    dispatch(setUserAnswer({ questionId, answer: answerIndex }));
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    if (!currentQuiz) return;

    let correctAnswers = 0;
    const results = currentQuiz.questions.map((question) => {
      const userAnswer = userAnswers[question.id];
      const isCorrect = userAnswer === question.correctAnswer;
      if (isCorrect) correctAnswers++;

      return {
        questionId: question.id,
        question: question.question,
        userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect,
        explanation: question.explanation,
      };
    });

    const score = Math.round(
      (correctAnswers / currentQuiz.questions.length) * 100
    );
    const result = {
      quizId: currentQuiz.id,
      quizTitle: currentQuiz.title,
      score,
      totalQuestions: currentQuiz.questions.length,
      correctAnswers,
      results,
      completedAt: new Date().toISOString(),
    };

    setQuizResults(result);
    setShowResults(true);
    dispatch(submitQuiz(result));
  };

  const retakeQuiz = () => {
    dispatch(resetQuiz());
    setShowResults(false);
    setQuizResults(null);
  };

  if (showResults && quizResults) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div
            className={`text-center mb-8 p-8 rounded-xl ${
              darkMode ? "bg-gray-800" : "bg-white shadow-lg"
            }`}
          >
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                quizResults.score >= currentQuiz.passingScore
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {quizResults.score >= currentQuiz.passingScore ? (
                <Trophy className="h-10 w-10" />
              ) : (
                <XCircle className="h-10 w-10" />
              )}
            </div>

            <h1
              className={`text-3xl font-bold mb-2 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Quiz Completed!
            </h1>

            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div
                  className={`text-4xl font-bold ${
                    quizResults.score >= currentQuiz.passingScore
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {quizResults.score}%
                </div>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Your Score
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-4xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {quizResults.correctAnswers}/{quizResults.totalQuestions}
                </div>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Correct
                </div>
              </div>
            </div>

            <div
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                quizResults.score >= currentQuiz.passingScore
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {quizResults.score >= currentQuiz.passingScore
                ? "Passed"
                : "Failed"}
              (Passing: {currentQuiz.passingScore}%)
            </div>
          </div>

          {/* Detailed Results */}
          <div className="space-y-6">
            {quizResults.results.map((result, index) => (
              <div
                key={result.questionId}
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800" : "bg-white shadow-lg"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      result.isCorrect
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {result.isCorrect ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <XCircle className="h-5 w-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-medium mb-3 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Question {index + 1}: {result.question}
                    </h3>
                    <div className="space-y-2">
                      <div
                        className={`p-3 rounded-lg ${
                          result.userAnswer !== undefined
                            ? result.isCorrect
                              ? "bg-green-50 border border-green-200 text-green-800"
                              : "bg-red-50 border border-red-200 text-red-800"
                            : "bg-gray-50 border border-gray-200 text-gray-800"
                        }`}
                      >
                        <span className="font-medium">Your Answer: </span>
                        {result.userAnswer !== undefined
                          ? currentQuiz.questions[index].options[
                              result.userAnswer
                            ]
                          : "No answer selected"}
                      </div>
                      {!result.isCorrect && (
                        <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-green-800">
                          <span className="font-medium">Correct Answer: </span>
                          {
                            currentQuiz.questions[index].options[
                              result.correctAnswer
                            ]
                          }
                        </div>
                      )}
                      <div
                        className={`text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <span className="font-medium">Explanation: </span>
                        {result.explanation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={retakeQuiz}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Retake Quiz
            </button>
            <button
              onClick={() => setShowResults(false)}
              className={`px-6 py-3 rounded-lg font-medium border transition-all duration-200 ${
                darkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              Back to Quizzes
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentQuiz && isQuizActive) {
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    const progress =
      ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;

    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quiz Header */}
          <div
            className={`p-6 rounded-xl mb-6 ${
              darkMode ? "bg-gray-800" : "bg-white shadow-lg"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h1
                className={`text-2xl font-bold ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {currentQuiz.title}
              </h1>
              <div
                className={`flex items-center gap-2 text-lg font-mono ${
                  timer < 300
                    ? "text-red-600"
                    : darkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                <Clock className="h-5 w-5" />
                {formatTime(timer)}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  Question {currentQuestionIndex + 1} of{" "}
                  {currentQuiz.questions.length}
                </span>
                <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div
                className={`w-full bg-gray-200 rounded-full h-2 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div
            className={`p-8 rounded-xl mb-6 ${
              darkMode ? "bg-gray-800" : "bg-white shadow-lg"
            }`}
          >
            <h2
              className={`text-xl font-semibold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {currentQuestion.question}
            </h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestion.id, index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    userAnswers[currentQuestion.id] === index
                      ? "border-blue-500 bg-blue-50 text-blue-900"
                      : darkMode
                      ? "border-gray-600 bg-gray-700 text-gray-300 hover:border-gray-500 hover:bg-gray-600"
                      : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  <span className="font-medium mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentQuestionIndex === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Previous
            </button>

            {currentQuestionIndex === currentQuiz.questions.length - 1 ? (
              <button
                onClick={handleSubmitQuiz}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-200"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Quiz List View
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Brain className="h-16 w-16 text-blue-600" />
          </div>
          <h1
            className={`text-4xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Electronics Quiz Hub
          </h1>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Test your knowledge with our comprehensive collection of electronics
            quizzes
          </p>
        </div>

        {/* User Stats */}
        {userScores.length > 0 && (
          <div
            className={`p-6 rounded-xl mb-8 ${
              darkMode ? "bg-gray-800" : "bg-white shadow-lg"
            }`}
          >
            <h2
              className={`text-lg font-semibold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Your Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div
                  className={`text-2xl font-bold mb-1 ${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  {userScores.length}
                </div>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Quizzes Taken
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold mb-1 ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  {Math.round(
                    userScores.reduce((acc, score) => acc + score.score, 0) /
                      userScores.length
                  )}
                  %
                </div>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Average Score
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold mb-1 ${
                    darkMode ? "text-purple-400" : "text-purple-600"
                  }`}
                >
                  {Math.max(...userScores.map((s) => s.score))}%
                </div>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Best Score
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-2xl font-bold mb-1 ${
                    darkMode ? "text-yellow-400" : "text-yellow-600"
                  }`}
                >
                  {userScores.filter((s) => s.score >= 70).length}
                </div>
                <div
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Passed
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Available Quizzes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:shadow-xl shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${
                    darkMode
                      ? "bg-blue-900 text-blue-400"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3
                    className={`text-xl font-semibold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {quiz.title}
                  </h3>
                  <span
                    className={`text-sm px-2 py-1 rounded-full ${
                      quiz.difficulty === "Beginner"
                        ? darkMode
                          ? "bg-green-900 text-green-300"
                          : "bg-green-100 text-green-800"
                        : quiz.difficulty === "Intermediate"
                        ? darkMode
                          ? "bg-yellow-900 text-yellow-300"
                          : "bg-yellow-100 text-yellow-800"
                        : darkMode
                        ? "bg-red-900 text-red-300"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {quiz.difficulty}
                  </span>
                </div>
              </div>

              <p
                className={`mb-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {quiz.description}
              </p>

              <div
                className={`space-y-2 mb-6 text-sm ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4" />
                  <span>{quiz.duration} minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span>{quiz.totalQuestions} questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Pass: {quiz.passingScore}%</span>
                </div>
              </div>

              <button
                onClick={() => startQuiz(quiz)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Play className="h-4 w-4" />
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
