import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  rollNumber: String,
  phone: String,
  year: String,
  branch: String,
  interests: [String],
  motivation: String,
  status: { type: String, default: "pending" },
  appliedDate: String
}, { timestamps: true });

export default mongoose.model("Member", memberSchema);