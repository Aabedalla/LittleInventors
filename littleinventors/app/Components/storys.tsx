import {RealStory} from '../info/realstory'
const Storys = () =>{
    return(
        <section className='mb-10'>
            <div className="text-center">
                <h2 className="font-bold py-5 text-[#474747] text-3xl">
                    قصص نجاح واقعية 
                </h2>
                <p className="text-center text-[#606060] mb-5">
                   إنجازات حقيقية من مخترعين شباب حقيقيين
                </p>
            </div>
<div className="grid grid-cols-1 mx-10  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
  {RealStory.map((s) => (
    <div 
      key={s.id}
      className="bg-white shadow-md rounded-xl p-6 space-y-3 hover:shadow-lg transition"
    >
      <p className="text-gray-700 leading-relaxed">
        {s.story}
      </p>

      <h4 className="text-lg font-semibold text-[#317EF9]">
        {s.by}
      </h4>

      <span className="text-sm text-gray-500">
        العمر: {s.age}
      </span>

      <p className="text-sm text-gray-600">
        {s.subject}
      </p>
    </div>
  ))}
</div>

        </section>
    )
}

export default Storys