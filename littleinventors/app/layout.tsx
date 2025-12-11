import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic"], // أو ["latin"] حسب الحاجة
  weight: ["400", "600", "700"], // الأوزان اللي بدك إياها
  variable: "--font-cairo", // اسم CSS variable لو بدك تستخدمه بتايلوند
})


export const metadata: Metadata = {
  title: "smallresearcher",
  description: "SmallResearcher is a platform to support young people and easily share knowledge and research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={` ${cairo.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
