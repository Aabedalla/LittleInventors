import NavBar from "../Components/Navbar"
import {DistinctiveInfo} from '../info/invations'
import Image from 'next/image'
const Project = ()=>{
    return(
        <>
            <NavBar />

            <div className="bg-gradient-to-r from-[#317EF9] space-y-5 py-5 to-[#912FB7] text-white text-center">
                <h1 className="text-3xl font-bold">
                    معرض المشاريع
                </h1>
                <p className="text-md ">
                    استكشف المشاريع المبتكرة التي أنشأها المخترعون الشباب من جميع أنحاء العالم
                </p>
            </div>

                        <div className="grid grid-cols-1 mb-5 mx-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
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
                                    <p className="px-3 text-[#707070] pb-2">
                                        {i.disc}
                                    </p>
                                </div>
                            ))}
                        </div>
        </>
    )
}

export default Project