import React from "react";
import LeafBackground from "../LeafBackground";

interface HeroSectionProps {
  role: "individual" | "business";
  setRole: React.Dispatch<React.SetStateAction<"individual" | "business">>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ role, setRole }) => {
  return (
    <section className="relative flex flex-wrap justify-around items-center gap-10 px-6 py-20 text-center bg-[#EDF4ED] overflow-hidden">
      <div className="absolute top-4 left-4 z-10">
        <div className="flex bg-white rounded-full border border-gray-300 shadow-sm">
          <button
            onClick={() => setRole("individual")}
            className={`px-2 py-1 text-sm font-medium rounded-full transition ${
              role === "individual"
                ? "bg-green-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Individual
          </button>
          <button
            onClick={() => setRole("business")}
            className={`px-2 py-1 text-sm font-medium rounded-full transition ${
              role === "business"
                ? "bg-green-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Business
          </button>
        </div>
      </div>

      {/* Recycle Symbol */}
      <img
        src="./images/recycle.png"
        alt="Recycle Symbol"
        className="absolute top-[20%] left-[14.5rem] w-[60px] sm:w-[70px] md:w-[83px] z-30"
      />

      {/* Solar Panels */}
      <img
        src="./images/finalsolar.png"
        alt="Solar Panels"
        className="absolute opacity-20"
        style={{ left: "25.1%", bottom: "6.15%", width: "250px" }}
      />

      {/* Tree Set 1 */}
      <img
        src="./images/finaltrees1.png"
        alt="Tree Set 1"
        className="absolute opacity-30"
        style={{ left: "69.51%", bottom: "5.43%", width: "250px" }}
      />

      {/* Tree Set 2 */}
      <img
        src="./images/finaltree.png"
        alt="Tree Set 2"
        className="absolute opacity-20"
        style={{ left: "59.12%", bottom: "5.43%", width: "100px" }}
      />

      {/* Wind Turbines */}
      <img
        src="./images/finalwindmill.png"
        alt="Wind Turbines"
        className="absolute opacity-100"
        style={{ left: "73.71%", top: "29.01%", width: "220px" }}
      />

      {/* Report Document */}
      <img
        src="./images/book1.png"
        alt="Report Document"
        className="absolute opacity-50"
        style={{
          left: "70.26%",
          top: "0.22%",
          transform: "matrix(0.97, 0.25, -0.3, 0.96, 0, 0)",
          width: "80px",
        }}
      />

      {/* Leaf Background */}
      <LeafBackground />

      {/* Left Graphic */}
      <div className="relative flex-1 min-w-[250px] max-w-sm z-10">
        <img
          src="./images/Recycle icon.png"
          alt="Recycle Icon"
          className="max-w-[246.43px] max-h-[441.08px] mx-auto"
        />
        <img
          src="./images/eco-market.png"
          alt="Eco Market Sign"
          className="absolute bottom-0 left-[70%] transform -translate-x-1/2 max-w-[106.3px] max-h-[166.46px]"
        />
      </div>

      {/* Center Text */}
      <div className="flex-1 min-w-[300px] h-[300px] max-w-xl flex flex-col w-full justify-center gap-5 items-center text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 leading-tight text-gray-800">
          Turn Your E-Waste into <br />
          <span className="text-gray-800">Environmental Impact</span>
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-3 max-w-[90%]">
          SortUs makes recycling electronics easy, rewarding, and responsible —
          for individuals, institutes, and industries.
        </p>

        <img
          src="./images/earth-magnify.png"
          alt="Earth Magnify"
          className="w-16 md:w-20 ml-[-600px] -mt-20 mb-4"
        />

        <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition">
          START SORTING NOW
        </button>
      </div>

      {/* Right Graphic */}
      <div className="flex-1 min-w-[250px] max-w-sm z-10">
        <img
          src="./images/report-graphic.png"
          alt="Report Graphic"
          className="max-w-[253.48px] max-h-[434.08px] mx-auto mb-6"
        />
      </div>
    </section>
  );
};

export default HeroSection;
