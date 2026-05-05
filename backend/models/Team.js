import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  year: String,
  email: String,
  phone: String,
  linkedin: String,
  specialization: String,
  bio: String,
  order: Number,
  isActive: { type: Boolean, default: true }
});

export default mongoose.model("Team", teamSchema);