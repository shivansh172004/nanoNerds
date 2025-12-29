import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  year: String,
  email: String,
  phone: String,
  linkedin: String,
  specialization: String,
  bio: String,
  order: Number
});

const Team = mongoose.model('Team', teamSchema);
export default Team;