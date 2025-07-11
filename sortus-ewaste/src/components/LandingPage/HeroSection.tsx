import React from "react";
import { useNavigate } from "react-router-dom";
import LeafBackground from "../LeafBackground";

interface HeroSectionProps {
  role: "individual" | "business";
  setRole: React.Dispatch<React.SetStateAction<"individual" | "business">>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ role, setRole }) => {
  const navigate = useNavigate();

  const handleStartSortingClick = () => {
    navigate("/login");
  };

  return (
    <section className="relative flex flex-col items-center justify-start w-full bg-[#EDF4ED] overflow-hidden pt-0 mt-0">
      {/* Toggle Switch */}
      <div className="absolute top-6 left-4 sm:left-6 z-30">
        <div className="flex bg-white rounded-full border border-gray-300 shadow-sm">
          <button
            onClick={() => setRole("individual")}
            className={`px-3 py-1 text-sm font-medium rounded-full transition ${
              role === "individual"
                ? "bg-green-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Individual
          </button>
          <button
            onClick={() => setRole("business")}
            className={`px-3 py-1 text-sm font-medium rounded-full transition ${
              role === "business"
                ? "bg-green-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Business
          </button>
        </div>
      </div>

      {/* Optional: Background Illustration */}
      <LeafBackground />

      {/* Hero Content */}
      <div className="w-full max-w-[1440px] mx-auto relative z-10 px-4 sm:px-6">
        {/* Hero SVG */}
        <img
          src="/illustrations/Herosection.svg"
          alt="Hero Section Illustration"
          className="w-full h-auto"
        />

        {/* Start Sorting Now Button - ABSOLUTE positioned */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-[60%] sm:top-[58%] md:top-[54%] z-30 cursor-pointer"
          onClick={handleStartSortingClick}
        >
          <img
            src="/illustrations/Startsortingnow.svg"
            alt="Start Sorting Now Button"
            className="w-[120px] sm:w-[135px] md:w-[150px] hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Spacer to prevent overlap with next section */}
      <div className="h-16 md:h-24" />
    </section>
  );
};

export default HeroSection;
