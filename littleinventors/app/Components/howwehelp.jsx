import {HelpInformation} from '../info/howWeHelp.js'
const HowWeHelp = ()=>{
    return(
        <section>
          <div className="text-center">
                <h2 data-aos="fade-up" className="font-bold py-5 text-[#474747] text-3xl">كيف نساعدك ؟</h2>
                <p data-aos="fade-up" className="text-center text-[#606060] mb-5">
رحلتك من الفكرة إلى البحث العلمي في خطوات بسيطة                  
                </p>
            </div>
            <div className="grid grid-cols-1 mb-5 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
  {HelpInformation.map((h) => {
    const IconComponent = h.icon;

    // خريطة للألوان الثابتة Tailwind
    const bgColors = {
      "blue-100": "bg-blue-100",
      "orange-100": "bg-orange-100",
      "purple-100": "bg-purple-100",
    };

    return (
      <div
      data-aos="fade-up"
        key={h.id}
        className="flex flex-col mx-5 items-center bg-gray-50 p-6 rounded-xl shadow-md text-center space-y-3"
      >
        <div className={`${bgColors[h.bg]} rounded-xl w-16 h-16 flex items-center justify-center`}>
          <IconComponent size={32} style={{ color: h.color }} />
        </div>

        <h3 className="text-lg font-semibold text-gray-800">{h.title}</h3>

        <p className="text-sm text-gray-600 leading-relaxed">{h.disc}</p>
      </div>
    );
  })}
            </div>

        </section>
    )
}
export default HowWeHelp