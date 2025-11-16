import { connectDB } from "@/lib/mongodb";
import Message from "../../models/Message";

export async function POST(req) {
  try {
    await connectDB();

    const data = await req.json();
    const newMessage = await Message.create(data);

    return Response.json({ success: true, message: newMessage });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function GET() {
  await connectDB();
  const messages = await Message.find().sort({ createdAt: -1 });
  return Response.json(messages);
}
