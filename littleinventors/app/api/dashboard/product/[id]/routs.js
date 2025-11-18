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
  const updated = await Projects.findByIdAndUpdate(params.id, data, { new: true });
  return new Response(JSON.stringify(updated), { status: 200 });
}

export async function DELETE(req, { params }) {
  await connectDB();
  await Projects.findByIdAndDelete(params.id);
  return new Response(JSON.stringify({ message: "Deleted Successfully" }), { status: 200 });
}
