import React from "react";
import LeafBackground from "../LeafBackground";

const stats = [
  {
    label: "Co2 Saved",
    value: "123",
    icon: "/illustrations/BusinessC02.svg",
    color: "orange",
  },
  {
    label: "Kg Recycled",
    value: "123",
    icon: "/illustrations/BusinessRecycle.svg",
    color: "green",
  },
  {
    label: "Trees Planted",
    value: "123",
    icon: "/illustrations/Businessleaf.svg",
    color: "orange",
  },
];

const ImpactStatsBusiness: React.FC = () => {
  return (
    <section className="relative flex justify-center flex-wrap gap-10 sm:gap-14 lg:gap-[100px] px-4 sm:px-8 py-16 bg-[#EDF4ED] overflow-hidden">
      <LeafBackground />

      {stats.map(({ label, value, icon, color }, idx) => (
        <div
          key={idx}
          className="relative group w-[220px] sm:w-[240px] md:w-[260px] h-[220px] sm:h-[240px] md:h-[260px] flex items-center justify-center rounded-full"
        >
          {/* Arc Circle Border */}
          <div
            className={`
              absolute w-full h-full border-[8px] rounded-full 
              border-l-transparent border-r-transparent 
              transform rotate-[30deg] transition-transform duration-500 group-hover:rotate-[60deg] z-0
              ${
                color === "orange"
                  ? "border-t-[#e88801] border-b-[#e88801]"
                  : "border-t-[#3e8e41] border-b-[#3e8e41]"
              }
            `}
          />

          {/* Inner Circle */}
          <div className="relative w-[92%] h-[92%] bg-[#E5E5E5] rounded-full shadow-md flex flex-col items-center justify-center z-10">
            <img
              src={icon}
              alt={label}
              className="w-[42%] h-[42%] object-contain mb-2"
            />
            <div className="text-[#3e8e41] font-bold text-base">{value}</div>
          </div>

          {/* Label below */}
          <div className="absolute top-full mt-4 w-full text-center font-semibold text-gray-800 text-sm sm:text-base">
            {label}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImpactStatsBusiness;