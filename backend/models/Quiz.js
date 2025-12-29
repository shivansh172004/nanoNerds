import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  difficulty: String,
  duration: Number,
  passingScore: Number,
  isActive: { type: Boolean, default: true },
  questions: [{
    question: String,
    options: [String],
    correctAnswer: Number,
    explanation: String
  }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;