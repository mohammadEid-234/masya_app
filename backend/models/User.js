import { type } from "express/lib/response";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String, unique: true, sparse: true }, // optional, sparse for multiple auth methods
  username : {type : String , unique: true,sparse: true},
  phoneNumber: { type: String, unique: true, required: true,},
  provider: {
    type: String, // 'google' | 'facebook' | 'local'
    default: 'local'
  },
  providerId: { type: String }, // e.g., Google/Facebook user ID
  role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
  createdAt: { type: Date, default: Date.now }
});


const User = mongoose.model('User', userSchema);
export default User;