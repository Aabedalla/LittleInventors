"use client";

import { useState } from "react";

const FormToJoin = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    projectField: "",
    projectTitle: "",
    projectDescription: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("تم الإرسال!");
      // إعادة تعيين الفورم
      setFormData({
        fullName: "",
        age: "",
        email: "",
        projectField: "",
        projectTitle: "",
        projectDescription: "",
      });
    }
  };

  return (
    <section className="flex justify-center items-center py-14 px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 space-y-6">

        <h2 className="text-3xl font-bold text-center text-[#333]">
          نموذج الطب
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* الاسم */}
          <div className="flex flex-col space-y-1">
            <label className="font-medium text-gray-700">الاسم الكامل</label>
            <input 
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="اكتب اسمك الكامل"
            />
          </div>

          {/* العمر */}
          <div className="flex flex-col space-y-1">
            <label className="font-medium text-gray-700">العمر</label>
            <input 
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="اكتب عمرك"
            />
          </div>

          {/* البريد */}
          <div className="flex flex-col space-y-1">
            <label className="font-medium text-gray-700">البريد الإلكتروني</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="example@gmail.com"
            />
          </div>

          {/* مجال المشروع */}
          <div className="flex flex-col space-y-1">
            <label className="font-medium text-gray-700">مجال المشروع</label>
            <input 
              type="text"
              name="projectField"
              value={formData.projectField}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="تكنولوجيا – علوم – طب – ... إلخ"
            />
          </div>

          {/* عنوان المشروع */}
          <div className="flex flex-col space-y-1">
            <label className="font-medium text-gray-700">عنوان المشروع</label>
            <input 
              type="text"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="اكتب عنوان مشروعك"
            />
          </div>

          {/* وصف المشروع */}
          <div className="flex flex-col space-y-1">
            <label className="font-medium text-gray-700">وصف المشروع</label>
            <textarea
              rows="4"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="اكتب وصفًا مختصرًا عن مشروعك"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#317EF9] to-[#912FB7] hover:opacity-90 transition"
          >
            إرسال
          </button>

        </form>
      </div>
    </section>
  );
};

export default FormToJoin;
