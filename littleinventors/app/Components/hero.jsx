import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
<section className="p-6">
  <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">

    {/* النص */}
    <div className="w-full md:w-1/2 text-right space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold text-[#333] leading-snug">
       أكاديمية الباحثين الصغار
      </h1>
      <p className="text-lg md:text-xl text-[#555] leading-relaxed">
          هل يدور في ذهنك فكرة مفيدة للعالم من حولك ؟ هل وجدت الطريق لتنفيذها أم لا ؟ في كل الاحوال أنت في المكان الصحيح
        </p>
      <p className="text-lg md:text-xl pt-0 text-[#555] leading-relaxed">
حوّل أفكارك إلى واقع بحثي و علمي. تواصل مع مرشدين، وطوّر أبحاث علمية ونماذج أولية، واعرض أبحاثك و ابتكاراتك للعالم.       
      </p>

    <Link href={'/projects'}
      className="bg-gradient-to-r from-[#317EF9] to-[#912FB7] text-white cursor-pointer font-semibold px-8 py-3  rounded-xl shadow-md 
                  animate-bounce transition-transform  duration-200"
    >
      إكتشف المشاريع
    </Link>

    </div>

        {/* الصورة */}
    <div className="relative w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-xl">
      <Image
        src="/hero.jpg"
        alt="Hero"
        fill
        className="object-cover rounded-2xl"
        priority
      />
    </div>

  </div>
</section>

  );
};

export default Hero;
