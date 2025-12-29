
import mongoose from 'mongoose';

// 2. Define your schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }
}, { timestamps: true });

// 3. Create the model
const User = mongoose.model('User', userSchema);

// 4. Export the model
export default User;