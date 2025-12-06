import Image from "next/image"
import {Join} from "../../info/joinInfo"

const Steps = () =>{
    return(
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-10 lg:grid-cols-3 gap-8 mt-10">
  {Join.map((item) => {
    const IconComponent = item.icon;

    const bgColors = {
      "blue-100": "bg-blue-100",
      "purple-100": "bg-purple-100",
      "orange-100": "bg-orange-100",
    };

    return (
      <div
        key={item.id}
        className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center text-center space-y-4"
      >
        {/* الأيقونة */}
        <div
          className={`${bgColors[item.bg]} w-16 h-16 rounded-xl flex items-center justify-center`}
        >
          <IconComponent size={32} style={{ color: item.color }} />
        </div>

        {/* النص */}
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>

        <p className="text-gray-600 text-sm">{item.disc}</p>
      </div>
    );
  })}
</div>
        </section>
    )
}

export default Steps