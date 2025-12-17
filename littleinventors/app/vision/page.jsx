import NavBar from "../Components/Navbar"
import {golse} from './Components/projectGols'
import {inovation} from "./Components/inovation"
import {maptodo} from "./Components/map"
const Vision = ()=>{
    return(
        <>
            <NavBar />
            <section>

            {/* القسم الأول - رؤيتنا */}
            <div className="bg-gradient-to-r from-[#912FB7] to-[#317EF9] text-white text-center py-5 space-y-5">
                <h1 className="text-3xl font-bold">رؤيتنا</h1>
                <p className="text-md px-3">
                    منهجية البحث العلمي لتمكين الطلبة لتحديد الميول المهنية و تحديد ووصف المشاكل من حولهم و الابتكار في ميولهم المهنية
                 </p>
            </div>

            {/* عن المشروع */}
            {/* <div className="text-center">
                <h2 data-aos="fade-up" className="text-3xl font-bold text-[#474747] py-5">
                عن المشروع
                </h2>
                <p data-aos="fade-left" className="text-[#606060] mb-5">
                مشروع الباحثين الصغار هو برنامج بحث علمي مصمم خصيصًا للشباب من عمر 14 إلى 18 سنة.
                </p>
            </div> */}


            <div>
  <h2
    data-aos="fade-up"
    className="text-center text-3xl font-bold text-[#474747] py-5"
  >
    تعلم كيف تصيغ فكرتك بالتعمق في الابحاث و الابتكارات المميزة
  </h2>

  <div className="flex justify-center w-full">
    <div className="grid md:grid-cols-2 gap-10 p-4 max-w-5xl w-full">

      {/* العمود الأول */}
      <div className="space-y-6 text-right">

        <ul className="space-y-3 leading-7">
          <li>حول أفكارك بمنهجية البحث العلمي الى حل او ابتكار او شيء يستفيد منه من حولك.</li>
          <li>حول وسخر ميولك الى وظيفة تستطيع الابداع بها.</li>
          <li>طور فكرتك باستخدام منهجية البحث العلمي لتتحول الى نموذج اولي او نتائج عملية.</li>
        </ul>

        <div className="space-y-4 leading-7">
          <p>
            كل ذالك من خلال إطلاق برنامج قصير المدى موجه لكم أيها الطلبة الناشئين من سن
            14 - 18 سنة, حيث يهدف الى تدريبكم على اساسيات البحث العلمي, التفكير النقدي,
            تحدي ميولكم المهنية, مهارات الكتابة و العرض لأبحاثكم العملية الصغيرة بإشراف
            أشخاص ذو خبرة.
          </p>

          <p>
            الفكرة تسعى إلى جعل الطالب شريكا في إنتاج المعرفة لا مجرد متلقٍ,
            وقادر على تحديد مهنة المستقبل وشريك في الابتكار.
          </p>
        </div>

      </div>

      {/* العمود الثاني */}
      <div className="p-5 text-right">
        <h3 className="text-xl font-bold pb-3">أهداف المشروع</h3>

        <ul className="list-disc pr-5 space-y-3 leading-7">
          {golse.map((g) => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</div>

            

            
            {/* مجالات البحث */}
            <div className="text-center pb-3">
                <h2 data-aos="fade-up" className="text-3xl font-bold text-[#474747] py-5">
                من مجالات البحث
                </h2>

                <ul data-aos="fade-left" className="flex justify-center px-5 flex-wrap gap-4">
                {inovation.map(i => (
                    <li
                    key={i.id}
                    className="px-5 py-3 bg-gradient-to-t from-[#912FB7] to-[#317EF9] text-white rounded-md text-center hover:shadow-md hover:scale-110 transition duration-200"
                    >
                    {i.name}
                    </li>
                ))}
                </ul>

                <p data-aos="fade-left" className="text-[#606060] px-3 mb-5 mt-4 max-w-[700px] mx-auto">
                البرنامج يعتمد على التجربة العملية، التعاون بين الطلاب، والتطبيق الحقيقي للمعرفة،
                حتى يخرج كل طالب بمشروع يمكن عرضه محليًا أو دوليًا.
                </p>
            </div>

            </section>
            <section>
                <div className="text-center pb-3">
                <h2 data-aos="fade-up" className="text-3xl px-3 font-bold text-[#474747] py-5">
                كيف تسير رحلة البحث العلمي؟
                </h2>
                <p data-aos="fade-left" className="text-[#606060] px-3 mb-5 mt-4 max-w-[700px] mx-auto">
            نرافقك في 6 مراحل واضحة تحوّل فكرتك إلى مشروع حقيقي.         
                </p>
            <ul 
            data-aos="fade-left" 
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center px-5 max-w-[900px] mx-auto"
            >
            {maptodo.map(item => (
                <li 
                key={item.id}
                className="bg-white p-6 text-center shadow-sm hover:shadow-md transition duration-200"
                >
                <h3 className="font-bold text-lg text-[#333] mb-2">
                    {item.title}
                </h3>

                <p className="text-[#606060] text-sm leading-6">
                    {item.desc}
                </p>
                </li>
            ))}
            </ul>

            </div>
            </section>
            <section className="max-w-5xl mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
            <div className="w-full">
                
                {/* العنوان العام */}
                <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-[#1f2937]">رؤيتنا للمستقبل</h1>
                <p className="text-gray-500 mt-2">
                    نبني جيلاً من الباحثين الشباب القادرين على التفكير النقدي، الابتكار الحقيقي، والبحث العلمي المبكر.
                </p>
                </div>

                {/* المحتوى داخل المنتصف */}
                <div className="grid md:grid-cols-2 gap-6 items-center justify-center">

                {/* البطاقة البيضاء */}
                <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                    <div className="w-16 h-16 flex items-center justify-center mb-4 text-2xl">🤝</div>
                    <h4 className="font-bold text-lg text-[#111] mb-2">بيئة تعاون محفزة</h4>
                    <p className="text-[#666] leading-6">
                    نوفر بيئة تشجع التعاون المثمر بين الطلاب والمدربين والخبراء،
                    لأن البحث العلمي رحلة جماعية نحو الاكتشاف.
                    </p>
                </div>

                {/* القائمة */}
                <div className="flex flex-col p-6 justify-center mr-3">
                    <h3 className="font-bold text-xl text-[#222] mb-4">نسعى لبناء جيل قادر على:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-[#666]">
                    <li>
                      التفكير بعمق ويطرح أسئلة ذكية

                    </li>
                    <li>
                      تحويل الفضول إلى مشاريع حقيقية 

                    </li>
                    <li>
                      تحوّيل الأسئلة إلى تجارب عملية

                    </li>
                    <li>
                      تحوّيل الأفكار إلى حلول مبتكرة

                    </li>
                    <li>
                      ربط التعلم بالتأثير الإيجابي في المجتمع 

                    </li>
                    </ul>
                </div>

                </div>
            </div>
            </section>
            <section className="grid md:grid-cols-2 px-3 gap-5 max-w-5xl mx-auto pb-5">

            {/* 1️⃣ */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-2 mb-2">
                <span className="bg-gradient-to-b from-blue-600 to-purple-500 text-white w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm">1</span>
                <h3 className="font-bold text-lg text-[#222]">أنت تحدد اهتماماتك</h3>
                </div>
                <p className="text-[#666] leading-6">
                هل تحب الهندسة؟ البيئة؟ الطب؟ التكنولوجيا؟ الرياضيات؟
                </p>
            </div>

            {/* 2️⃣ */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-2 mb-2">
                <span className="bg-gradient-to-b from-blue-600 to-purple-500 text-white w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm">2</span>
                <h3 className="font-bold text-lg text-[#222]">النظام يقترح لك مسارات مناسبة</h3>
                </div>
                <p className="text-[#666] leading-6">
                بناءً على ميولك، نقترح عليك أفكار بحثية تناسب اهتماماتك.
                </p>
            </div>

            {/* 3️⃣ */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-2 mb-2">
                <span className="bg-gradient-to-b from-blue-600 to-purple-500 text-white w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm">3</span>
                <h3 className="font-bold text-lg text-[#222]">مُدرِّبك يساعدك في اختيار فكرة واقعية</h3>
                </div>
                <p className="text-[#666] leading-6">
                نرشدك لاختيار مشروع قابل للتنفيذ ويناسب قدراتك.
                </p>
            </div>

            {/* 4️⃣ */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-2 mb-2">
                <span className="bg-gradient-to-b from-blue-600 to-purple-500 text-white w-7 h-7 rounded-md flex items-center justify-center font-bold text-sm">4</span>
                <h3 className="font-bold text-lg text-[#222]">تبدأ رحلتك البحثية</h3>
                </div>
                <p className="text-[#666] leading-6">
                تنفذ مشروعًا يُعبّر عنك ويطور مهاراتك الحقيقية.
                </p>
            </div>

            </section>
            <div className="bg-white mb-5 mx-3 border shadow-sm p-4 rounded-xl max-w-4xl  text-center leading-loose">
            <p className="text-lg font-medium">

                ✨ <span className="text-[#444]">النتيجة؟ كل طالب يعمل على مشروع</span>
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-bold"> يعبّر عنه،</span>
                <span className="bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text font-bold"> يستمتع به،</span>
                <span className="text-[#444]"> ويطوّر من خلاله</span>
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-bold"> مهارات حقيقية</span>
                <span className="text-[#444]"> تدوم معه للأبد.</span>

            </p>
            </div>
        </>
    )
}

export default Vision