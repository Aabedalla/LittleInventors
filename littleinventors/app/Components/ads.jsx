const Ads = ()=>{
    return(
        <section className="my-10">
  <div className="relative w-3xl mx-auto h-[300px] rounded-2xl overflow-hidden shadow-lg">

    {/* الصورة الخلفية */}
    <img 
      src="/hero.jpg" 
      alt="hero" 
      className="w-full h-full object-cover"
    />

    {/* طبقة شفافية */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* المحتوى */}
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white space-y-4">

      <h2 className="text-3xl md:text-4xl font-bold">
        هل أعجبك ما نقدّم ؟
      </h2>

      <p className="text-lg md:text-xl">
        إنضم الآن وانشر أفكارك
      </p>

      <button
        className="px-8 py-3 rounded-lg text-white font-semibold 
        bg-gradient-to-r from-[#317EF9] to-[#912FB7] shadow-md hover:opacity-90 transition"
      >
        قدم الآن
      </button>

    </div>

  </div>
</section>

    )
}

export default Ads