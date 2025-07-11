import React from "react";
import LeafBackground from "../LeafBackground";

const stats = [
  {
    label: "CO₂ Saved",
    value: "123",
    icon: "CO₂",
    color: "orange",
    isTextIcon: true,
  },
  {
    label: "Kg Recycled",
    value: "123",
    icon: "/illustrations/Individualkg.svg",
    color: "green",
    isTextIcon: false,
  },
  {
    label: "Trees Planted",
    value: "123",
    icon: "/illustrations/Individualtree.svg",
    color: "orange",
    isTextIcon: false,
  },
];

const ImpactStats: React.FC = () => {
  return (
    <section className="relative flex justify-center flex-wrap gap-8 sm:gap-12 lg:gap-[80px] px-4 sm:px-6 py-16 bg-[#EDF4ED] overflow-hidden">
      <LeafBackground />

      {stats.map(({ label, value, icon, color, isTextIcon }) => (
        <div
          key={label}
          className="relative group w-[220px] sm:w-[240px] md:w-[260px] h-[220px] sm:h-[240px] md:h-[260px] flex items-center justify-center"
        >
          {/* Arc Circle Border - Tailwind-based rotation */}
          <div
            className={`
              absolute w-full h-full border-[8px] rounded-full border-l-transparent border-r-transparent
              transform rotate-[30deg] transition-transform duration-500 group-hover:rotate-[60deg] z-0
              ${color === "orange"
                ? "border-t-[#e88801] border-b-[#e88801]"
                : "border-t-[#3e8e41] border-b-[#3e8e41]"}
            `}
          />

          {/* Center Circle */}
          <div className="relative w-[92%] h-[92%] bg-[#e0e0e0] rounded-full shadow-md flex items-center justify-center z-10">
            {isTextIcon ? (
              <div className="text-4xl sm:text-5xl font-bold text-[#1B4D3E]">{icon}</div>
            ) : (
              <img
                src={icon}
                alt={label}
                className="w-[35%] h-[35%] object-contain"
              />
            )}

            {/* CO₂ Decorative Dots */}
            {label === "CO₂ Saved" && (
              <>
                <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#e88801] left-[68%] top-[18%]" />
                <div className="absolute w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#3C8A3F] left-[78%] top-[26%]" />
              </>
            )}

            {/* Value Text */}
            <div className="absolute bottom-4 text-sm sm:text-base font-bold text-[#3e8e41]">
              {value}
            </div>
          </div>

          {/* Label Text */}
          <div className="absolute top-full mt-4 w-full text-center font-semibold text-gray-800 text-sm sm:text-base">
            {label}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImpactStats;