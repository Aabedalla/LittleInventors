import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  category: String,
  images: [String],
  description: String,
  age: Number,
  isFeatured: { type: Boolean, default: false }, // هل المنتج مميز
  featuredAt: { type: Date, default: null } // وقت إضافة المنتج المميز

});

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
