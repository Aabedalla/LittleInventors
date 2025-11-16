"use client";
import { useEffect, useState } from "react";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  const loadMessages = async () => {
    const res = await fetch("/api/messages");
    const data = await res.json();
    setMessages(data);
  };

  useEffect(() => {
    loadMessages();
  }, []);

const deleteMessage = async (id) => {
  const res = await fetch(`/api/messages/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    setMessages(messages.filter((m) => m._id !== id));
  } else {
    alert("حدث خطأ أثناء الحذف");
  }
};

  return (
<div className="bg-white p-6 rounded-2xl shadow-xl">
  <h1 className="text-3xl font-bold text-gray-800 mb-6">
    الرسائل الواردة
  </h1>

  <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
    <table className="w-full text-left">
      <thead className="bg-gradient-to-r from-[#317EF9] to-[#912FB7] text-white">
        <tr>
          <th className="p-4 text-sm font-medium">الاسم</th>
          <th className="p-4 text-sm font-medium">البريد</th>
          <th className="p-4 text-sm font-medium">عنوان المشروع</th>
          <th className="p-4 text-sm font-medium text-center">حذف</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {messages.map((msg) => (
          <tr
            key={msg._id}
            className="hover:bg-gray-50 transition"
          >
            <td className="p-4 text-gray-700 font-medium">{msg.fullName}</td>
            <td className="p-4 text-gray-600">{msg.email}</td>
            <td className="p-4 text-gray-600">{msg.projectTitle}</td>
            <td className="p-4 text-center">
              <button
                onClick={() => deleteMessage(msg._id)}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition font-medium shadow-sm"
              >
                حذف
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


  );
}
