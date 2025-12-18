"use client";
import NavBar from "../Components/Navbar"
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from 'next/image'


const Project = ()=>{
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 9;

  // جلب المنتجات من API
  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/dashboard/product");
      if (!res.ok) throw new Error("فشل في جلب المنتجات");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء جلب المنتجات");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // حساب المنتجات المعروضة حسب الصفحة
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedProducts = products.slice(start, end);



    return(
        <>
            <NavBar />

            <div className="bg-gradient-to-r from-[#317EF9] space-y-5 py-5 px-3 to-[#912FB7] text-white text-center">
                <h1 className="text-3xl font-bold">
                    معرض المشاريع
                </h1>
                <p className="text-md ">
                    استكشف المشاريع المبتكرة التي أنشأها المخترعون الشباب من جميع أنحاء العالم
                </p>
            </div>

            <div className="grid grid-cols-1 mb-5 mx-10 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {paginatedProducts.map(i => (
                        <div key={i._id} className="bg-white shadow-sm rounded-md">
    
                            <div className="w-[400px] h-[300px] overflow-hidden rounded-t-md">
                                <Image
                                    src={i.images[0]}
                                    fill
                                    alt={i.name}
                                    className="object-cover"
                                />
                                </div>

    
                            <div className="flex gap-2 p-5 mb-2">
                                <span className="bg-[#FF6F00] text-white rounded-full px-3 py-1 text-sm">
                                    {i.category}
                                </span>
    
                                <span className="bg-[#EBEAE9] text-[#707070] rounded-full px-3 py-1 text-sm">
                                    {i.age}
                                </span>
                            </div>
    
                            <h3 className="text-[#212121] text-xl pr-5 pb-3 font-extrabold">
                                {i.name}
                            </h3>
                            <p className="px-3 text-[#707070] pb-2 line-clamp-2">
                                {i.description}
                            </p>
                            <div className="p-5">
                    <Link
                        href={`/projects/${i._id}`}
                        className="block text-center w-full bg-gradient-to-r from-[#317EF9] to-[#912FB7] text-white font-semibold py-2 rounded-md shadow-md hover:opacity-90 transition"
                    >
                        عرض المشروع
                    </Link>
            </div>


                        </div>
                    ))}
                </div>
        </>
    )
}

export default Project