const FormToJoin = () =>{
    return(
<section className="flex justify-center items-center py-14 px-4">
  <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 space-y-6">

    {/* العنوان */}
    <h2 className="text-3xl font-bold text-center text-[#333]">
      نموذج الطب
    </h2>

    {/* الفورم */}
    <form className="space-y-5">

      {/* الاسم */}
      <div className="flex flex-col space-y-1">
        <label className="font-medium text-gray-700">الاسم الكامل</label>
        <input 
          type="text"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="اكتب اسمك الكامل"
        />
      </div>

      {/* العمر */}
      <div className="flex flex-col space-y-1">
        <label className="font-medium text-gray-700">العمر</label>
        <input 
          type="number"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="اكتب عمرك"
        />
      </div>

      {/* البريد */}
      <div className="flex flex-col space-y-1">
        <label className="font-medium text-gray-700">البريد الإلكتروني</label>
        <input 
          type="email"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="example@gmail.com"
        />
      </div>

      {/* مجال المشروع */}
      <div className="flex flex-col space-y-1">
        <label className="font-medium text-gray-700">مجال المشروع</label>
        <input 
          type="text"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          placeholder="تكنولوجيا – علوم – طب – ... إلخ"
        />
      </div>

      {/* عنوان المشروع */}
      <div className="flex flex-col space-y-1">
        <label className="font-medium text-gray-700">عنوان المشروع</label>
        <input 
          type="text"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          placeholder="اكتب عنوان مشروعك"
        />
      </div>

      {/* وصف المشروع */}
      <div className="flex flex-col space-y-1">
        <label className="font-medium text-gray-700">وصف المشروع</label>
        <textarea
          rows="4"
          className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          placeholder="اكتب وصفًا مختصرًا عن مشروعك"
        ></textarea>
      </div>

      {/* زر الإرسال */}
      <button
        type="submit"
        className="w-full py-3 mt-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#317EF9] to-[#912FB7] hover:opacity-90 transition"
      >
        إرسال
      </button>

    </form>
  </div>
</section>

    )
}
export default FormToJoin