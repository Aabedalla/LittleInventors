"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import sliderImages from "../info/sliderImages";

const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const imagesPerSlide = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + imagesPerSlide >= sliderImages.length ? 0 : prev + imagesPerSlide
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleImages = sliderImages.slice(
    index,
    index + imagesPerSlide
  );

  return (
    <section className="mb-5">
                  <div className="text-center">
                <h2 data-aos="fade-up" className="font-bold py-5 text-[#474747] text-3xl">
                     جولات تدريبية تم تنفيذها مع مدارس و جمعيات محلية  
                </h2>
                <p data-aos="fade-left" className="text-center text-[#606060] mb-5">
                    تم تنفيذها بالتعاون مع جمعية رؤية الشبابية و مدرسة الشبل الرائد
                </p>
            </div>
                <div className="w-full max-w-6xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-500">
        {visibleImages.map((img) => (
          <div
            key={img.id}
            className="relative h-60 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
    </section>

  );
};

export default SlideShow;
