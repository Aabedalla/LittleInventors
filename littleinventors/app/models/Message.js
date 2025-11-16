import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  fullName: String,
  age: Number,
  email: String,
  projectField: String,
  projectTitle: String,
  projectDescription: String,
}, { timestamps: true });

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);
