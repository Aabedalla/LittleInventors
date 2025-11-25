import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "supersecret";

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === "Basel" && password === "Basel@32") {
    const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });

    const cookieStore = await cookies(); // ⬅️ مهم جدًا

    cookieStore.set({
      name: "dashboard_token",
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: false,
    });

    return NextResponse.json({ success: true });
  }

  return NextResponse.json(
    { message: "خطأ في تسجيل الدخول" },
    { status: 401 }
  );
}
