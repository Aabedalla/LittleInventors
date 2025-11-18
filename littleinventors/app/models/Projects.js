import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  category: String,
  images: [String],
  description: String,
  age: Number,

});

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
