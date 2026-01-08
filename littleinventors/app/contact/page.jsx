"use client";
import NavBar from "../Components/Navbar"

import FormToJoin from "./Components/form"
import Steps from "./Components/steps"
const Contact = () =>{
    return(
        <>
            <NavBar />
            <div className="bg-gradient-to-r from-[#FF6E02] space-y-5 py-5 px-3 to-[#912FB7] text-white text-center">
                <h1 className="text-3xl font-bold">
                إنضم الى الباحثين الصغار             
                 </h1>
                <p className="text-md ">
                ابدأ رحلة البحث اليوم. سجّل في برنامجنا وحوّل أفكارك إلى أبحاث وانجازات!
                </p>
            </div>

            <Steps />
            <FormToJoin />
        </>
    )
}

export default Contact