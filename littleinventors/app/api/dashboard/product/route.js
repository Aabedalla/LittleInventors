import { connectDB } from "../../../../lib/mongodb";
import Projects from "../../../models/Projects";
import { NextResponse } from "next/server";

// رفع منتج بعد رفع الصور من Frontend
export async function POST(req) {
  await connectDB();
  const data = await req.json(); // يحتوي على images[] روابط من Cloudinary
  try {
    const product = await Projects.create(data);
    return NextResponse.json(product, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "حدث خطأ أثناء إضافة المشروع" }, { status: 500 });
  }
}

// GET لجلب المنتجات
export async function GET() {
  await connectDB();
  const products = await Projects.find();
  return NextResponse.json(products);
}

// PATCH لتعديل المنتج
export async function PATCH(req) {
  await connectDB();
  const { id, ...updateData } = await req.json();
  const updatedProduct = await Projects.findByIdAndUpdate(id, updateData, { new: true });
  return NextResponse.json(updatedProduct);
}

// DELETE لحذف المنتج
export async function DELETE(req) {
  await connectDB();
  const { id } = await req.json();
  await Projects.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
