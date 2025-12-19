"use client";
import { useState, useEffect } from "react";
import { Star } from 'lucide-react';

const ProductsDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    age: "",
    category: "",
    images: [],
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    const res = await fetch("/api/dashboard/product");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setForm({ ...form, images: files });
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setForm({ ...product });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const uploadedImages = [];

      for (const file of form.images) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "products_upload");

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/do1j98mlk/image/upload`,
          { method: "POST", body: formData }
        );

        const data = await res.json();
        uploadedImages.push(data.secure_url);
      }

      const productData = { ...form, images: uploadedImages };
      const method = editingId ? "PATCH" : "POST";
      const apiRes = await fetch("/api/dashboard/product", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingId ? { id: editingId, ...productData } : productData),
      });

      if (apiRes.ok) {
        setForm({ name: "", age: "", category: "", images: [], description: ""});
        setEditingId(null);
        fetchProducts();
      } else alert("فشل العملية");
    } catch (err) {
      console.error(err);
      alert("حدث خطأ");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("هل أنت متأكد من حذف المشروع")) return;
    await fetch("/api/dashboard/product", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    fetchProducts();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">إدارة المشاريع</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">{editingId ? "تعديل المشروع" : "إضافة مشروع جديد"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="name" placeholder="اسم المشروع" value={form.name} onChange={handleChange} className="border p-3 rounded-lg" />
          <input name="age" type="number" placeholder="العمر" value={form.age} onChange={handleChange} className="border p-3 rounded-lg" />
          <input name="category" placeholder="التصنيف" value={form.category} onChange={handleChange} className="border p-3 rounded-lg" />
          <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isFeatured"
            checked={form.isFeatured || false}
            onChange={(e) => setForm({ ...form, isFeatured: e.target.checked })}
          />
          <label>مميز؟</label>
        </div>
        </div>
        <textarea name="description" placeholder="الوصف" value={form.description} onChange={handleChange} className="border p-3 rounded-lg w-full"></textarea>
        <input type="file" multiple onChange={handleImagesChange} className="border p-3 rounded-lg w-full" />
        <button
          type="submit"
          disabled={loading} // تمنع الضغط أثناء الإرسال
          className={`w-full p-3 rounded text-white font-semibold ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {loading ? "جاري الإضافة..." : editingId ? "تعديل المشروع" : "إضافة المشروع"}
        </button>
      </form>

      <div className="overflow-x-auto overflow-y-auto max-h-[500px] shadow rounded-lg bg-white mt-6">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-100 sticky top-0">
            <tr>
              <th className="py-3 px-4 text-center text-gray-700 font-medium">الاسم</th>
              <th className="py-3 px-4 text-center text-gray-700 font-medium">مميز</th>
              <th className="py-3 px-4 text-center text-gray-700 font-medium">العمر</th>
              <th className="py-3 px-4 text-center text-gray-700 font-medium">الصنف</th>
              <th className="py-3 px-4 text-center text-gray-700 font-medium">الوصف</th>
              <th className="py-3 px-4 text-center text-gray-700 font-medium">الصور</th>
              <th className="py-3 px-4 text-center text-gray-700 font-medium">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="text-center border-t hover:bg-gray-50">
                <td className="py-2 px-4">{p.name}</td>
                <td className="py-2 px-4">
                   {p.isFeatured && <Star className="inline-block mb-1 mx-2 text-yellow-500" size={20} />}
                </td>
                <td className="py-2 px-4">{p.age}</td>
                <td className="py-2 px-4">{p.category}</td>
                <td className="py-2 px-4">{p.description}</td>
                <td className="py-2 px-4">{p.images?.map((img, i) => (<img key={i} src={img} className="w-16 h-16 object-cover inline-block mx-1 rounded border" />))}</td>
                <td className="py-2 px-4 space-x-2">
                  <button onClick={() => handleEdit(p)} className="bg-yellow-500 text-white px-3 py-1 rounded">تعديل</button>
                  <button onClick={() => handleDelete(p._id)} className="bg-red-500 text-white px-3 py-1 rounded">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsDashboard;
