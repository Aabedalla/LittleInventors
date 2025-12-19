// api/product/[id].js
import { connectDB } from "@/lib/mongodb";
import Projects from "../../../../models/Projects";

export async function GET(req, { params }) {
  await connectDB();
  const product = await Projects.findById(params.id);
  return new Response(JSON.stringify(product || {}), { status: 200 });
}

export async function PUT(req, { params }) {
  await connectDB();
  const data = await req.json();

  // تحقق إذا تم تفعيل isFeatured
  if (!!data.isFeatured) {
    const featuredCount = await Projects.countDocuments({ isFeatured: true, _id: { $ne: params.id } });
    if (featuredCount >= 4) {
      return new Response(JSON.stringify({ error: "وصلنا الحد الأقصى للمنتجات المميزة" }), { status: 400 });
    }
    data.featuredAt = new Date();
  } else {
    data.featuredAt = null; // إذا ألغى المميز
  }

  const updated = await Projects.findByIdAndUpdate(params.id, data, { new: true });
  return new Response(JSON.stringify(updated), { status: 200 });
}


export async function DELETE(req, { params }) {
  await connectDB();
  await Projects.findByIdAndDelete(params.id);
  return new Response(JSON.stringify({ message: "Deleted Successfully" }), { status: 200 });
}
