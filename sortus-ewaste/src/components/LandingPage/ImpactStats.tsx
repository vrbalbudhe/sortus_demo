import React from "react";
import LeafBackground from "../LeafBackground"; 

const stats = [
  { label: "CO₂ Saved", value: "123", icon: "CO₂", color: "orange", isTextIcon: true },
  { label: "Kg Recycled", value: "123", icon: "./images/factory.png", color: "green", isTextIcon: false },
  { label: "Trees Planted", value: "123", icon: "./images/leaf.png", color: "orange", isTextIcon: false },
];

const ImpactStats: React.FC = () => {
  return (
    <section className="relative flex justify-center flex-wrap gap-[140px] px-10 py-20 bg-[#EDF4ED] overflow-hidden">
      {/* Leaf Background */}
      <LeafBackground />

      {stats.map(({ label, value, icon, color, isTextIcon }) => (
        <div
          key={label}
          className="relative group w-[280px] h-[280px] flex items-center justify-center"
        >
          {/* Arc Circle Border */}
          <div
            className={`absolute inset-0 -m-2 w-[300px] h-[300px] border-[10px] rounded-full border-transparent 
            transition-transform duration-500 group-hover:rotate-[45deg] z-0
            ${color === "orange"
              ? "border-t-[#e88801] border-b-[#e88801]"
              : "border-t-[#3e8e41] border-b-[#3e8e41]"
            }`}
          />

          {/* Grey Center Circle */}
          <div className="relative w-[280px] h-[280px] bg-[#e0e0e0] rounded-full shadow-md flex items-center justify-center z-10">
            {/* Icon */}
            {isTextIcon ? (
              <div className="text-5xl font-bold text-[#1B4D3E]">{icon}</div>
            ) : (
              <img src={icon} alt={label} className="w-20 h-20 object-contain" />
            )}

            {/* Decorative Dots for CO₂ */}
            {label === "CO₂ Saved" && (
              <>
                <div className="absolute w-3 h-3 rounded-full bg-[#e88801] left-[68%] top-[18%]" />
                <div className="absolute w-3 h-3 rounded-full bg-[#3C8A3F] left-[78%] top-[26%]" />
              </>
            )}

            {/* Value Text */}
            <div className="absolute bottom-7 text-xl font-bold text-[#3e8e41]">
              {value}
            </div>
          </div>

          {/* Label Text Below */}
          <div className="absolute top-[310px] w-full text-center font-semibold text-gray-800 text-xl">
            {label}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImpactStats;
