// app/projects/[id]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { connectDB } from "@/lib/mongodb";
import Projects from "../../models/Projects";

const ProjectDetails = async ({ params }) => {
  const { id } = await params;

  // الاتصال بقاعدة البيانات
  await connectDB();

  // جلب المشروع من قاعدة البيانات
  const project = await Projects.findById(id).lean();

  if (!project) {
    return <p className="text-center mt-20">المشروع غير موجود</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* رجوع */}
      <div className="container mx-auto px-5 mb-5">
        <Link
          href="/projects"
          className="text-blue-600 font-semibold hover:underline"
        >
          ← العودة للمعرض
        </Link>
      </div>

      {/* المحتوى */}
      <div className="container mx-auto bg-white rounded-lg shadow p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* الصورة */}
        <div>
          <Image
            src={project.images?.[0] || "/placeholder.jpg"}
            alt={project.name || "Project"}
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* التفاصيل */}
        <div className="space-y-5">
          <h1 className="text-3xl font-extrabold text-[#212121]">
            {project.name}
          </h1>

          <div className="flex gap-3">
            <span className="bg-[#FF6F00] text-white rounded-full px-4 py-1 text-sm">
              {project.category}
            </span>

            <span className="bg-gray-200 text-[#707070] rounded-full px-4 py-1 text-sm">
              {project.age} سنة
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg">
            {project.description}
          </p>

          {/* معلومات إضافية إن وجدت */}
          {project.materials && (
            <div>
              <h3 className="font-bold text-lg">المواد المستخدمة:</h3>
              <p className="text-gray-600">{project.materials}</p>
            </div>
          )}

          {/* زر جميل */}
          <div className="flex justify-center mt-6">
                <Link
                    href="/contact"
                    className="w-full max-w-xs text-center bg-gradient-to-r from-[#317EF9] to-[#912FB7] text-white font-bold py-3 rounded-lg shadow hover:opacity-90 transition"
                >
                    إنضم إلينا
                </Link>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
