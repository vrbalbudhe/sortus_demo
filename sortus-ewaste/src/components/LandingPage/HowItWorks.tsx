import React from "react";
import LeafBackground from "../LeafBackground";

type Step = {
  title: string;
  img: string;
  infoText: string;
};

const steps: Step[] = [
  {
    title: "Schedule Pickup",
    img: "./images/car.png",
    infoText:
      "We’ll come to your doorstep and collect your sorted waste efficiently.",
  },
  {
    title: "Evaluation of Waste",
    img: "./images/girl.png",
    infoText:
      "Our team evaluates your waste for quality and recyclability.",
  },
  {
    title: "Get Rewards!",
    img: "./images/gift.png",
    infoText:
      "Earn rewards, discounts, or redeem points based on your contributions!",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="relative py-16 bg-[#EDF4ED] text-center overflow-hidden">
      {/* Leaf Background */}
      <LeafBackground />

      <h2 className="text-2xl font-bold mb-12 font-sans relative z-10">
        The SortUs Flow: Simple. Smart. Sorted.
      </h2>

      <div className="flex justify-center gap-12 flex-wrap relative z-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className="group relative w-[300px] h-[300px] text-center"
          >
            {/* Hover Box */}
            <div className="hidden group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[180px] bg-white rounded-[16px] shadow-lg p-5 z-20 flex-row items-center justify-start gap-4">
              <img
                src={step.img}
                alt={step.title}
                className="w-[160px] h-full object-contain"
              />
              <p className="text-left text-sm text-gray-700">
                {step.infoText}
              </p>
            </div>

            {/* Main Image */}
            <img
              src={step.img}
              alt={step.title}
              className="w-[260px] h-[180px] object-cover rounded-lg mx-auto shadow-md transition-transform duration-300 group-hover:opacity-0"
            />

            {/* Title */}
            <p className="mt-4 font-semibold text-lg text-gray-800 group-hover:opacity-0">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
