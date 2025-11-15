import {DistinctiveInfo} from '../info/invations'
import Image from 'next/image'

const DistinctiveInnovation = ()=> {
    return (
        <section>
            <div className="text-center">
                <h2 className="font-bold py-5 text-[#474747] text-3xl">
                    الابتكارات <span className="text-[#3782F9]">المميزة</span>
                </h2>
                <p className="text-center text-[#606060] mb-5">
                    اكتشف المشاريع الرائدة التي أنشأها العقول الشابة في جميع أنحاء العالم
                </p>
            </div>

            <div className="grid grid-cols-1 mb-5 mx-10 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
                {DistinctiveInfo.map(i => (
                    <div key={i.id} className="bg-white shadow-sm rounded-md">

                        <Image 
                            src={`/${i.img}`}
                            width={400}
                            height={300}
                            alt={i.title}
                            className="rounded-t-md mb-3"
                        />

                        <div className="flex gap-2 p-5 mb-2">
                            <span className="bg-[#FF6F00] text-white rounded-full px-3 py-1 text-sm">
                                {i.category}
                            </span>

                            <span className="bg-[#EBEAE9] text-[#707070] rounded-full px-3 py-1 text-sm">
                                {i.age}
                            </span>
                        </div>

                        <h3 className="text-[#212121] text-xl pr-5 pb-3 font-extrabold">
                            {i.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DistinctiveInnovation
