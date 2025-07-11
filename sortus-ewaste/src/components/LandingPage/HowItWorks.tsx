import React from "react";
import LeafBackground from "../LeafBackground";

type Step = {
  title: string;
  img: string;
  infoText: string;
  extraClass?: string;
  titleClass?: string;
  imgSizeClass?: string;
};

const steps: Step[] = [
  {
    title: "Schedule Pickup",
    img: "/illustrations/Schedulepickup.svg",
    infoText: "We’ll come to your doorstep and collect your sorted waste efficiently.",
    imgSizeClass: "max-w-[180px] sm:max-w-[200px]",
  },
  {
    title: "Evaluation of Waste",
    img: "/illustrations/Evaluationofwaste.svg",
    infoText: "Our team evaluates your waste for quality and recyclability.",
    imgSizeClass: "max-w-[180px] sm:max-w-[200px]",
  },
  {
    title: "Get Rewards!",
    img: "/illustrations/gift.svg",
    infoText: "Earn rewards, discounts, or redeem points based on your contributions!",
    extraClass: "md:ml-16 lg:ml-28",
    titleClass: "md:ml-8 lg:ml-16",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="relative py-16 bg-[#EDF4ED] text-center overflow-hidden">
      <LeafBackground />

      <h2 className="text-2xl md:text-3xl font-bold mb-12 font-sans relative z-10">
        The SortUs Flow: Simple. Smart. Sorted.
      </h2>

      <div className="flex justify-center gap-12 lg:gap-20 flex-wrap relative z-10">
        {steps.map((step, i) => (
          <div
            key={i}
            className="group relative w-[260px] sm:w-[280px] md:w-[300px] h-[300px] flex flex-col justify-between items-center text-center"
          >
            {/* Hover Info Box */}
            <div className="hidden group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[420px] h-[180px] bg-white rounded-[16px] shadow-lg p-5 z-20 flex-row items-center justify-start gap-4">
              <img
                src={step.img}
                alt={step.title}
                className="w-[130px] h-full object-contain"
              />
              <p className="text-left text-sm text-gray-700">{step.infoText}</p>
            </div>

            {/* Main Image */}
            <img
              src={step.img}
              alt={step.title}
              className={`w-full ${step.imgSizeClass ?? "max-w-[160px]"} h-auto object-contain mx-auto transition-opacity duration-300 group-hover:opacity-0 ${step.extraClass ?? ""}`}
            />

            {/* Title */}
            <p
              className={`-mt-1 font-semibold text-base md:text-lg text-gray-800 group-hover:opacity-0 ${step.titleClass ?? ""}`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
