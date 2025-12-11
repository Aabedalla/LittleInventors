import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex flex-wrap shadow-md items-center justify-between  p-4 bg-gray-100">
      <div>
       <Link href="/" className="text-xl items-center flex font-bold text-[#C09059] cursor-pointer">
          <img src="/smallresearcher.png" width={60}/> 
       </Link>
      </div>
      <div className="flex gap-6 text-[#707070]">
        <Link href="/" className="hover:text-[#317EF9] transition-colors duration-200">الرئيسية</Link>
        <Link href="/projects" className="hover:text-[#317EF9] transition-colors duration-200">مشاريعنا</Link>
        <Link href="/vision" className="hover:text-[#317EF9] transition-colors duration-200">رؤتيتنا</Link>
        <Link href="/contact" className="hover:text-[#317EF9] transition-colors duration-200">انضم لنا</Link>
      </div>
      
    </nav> 
  )
}

export default NavBar;
