import React, { useState } from "react";
import HeroSection from "../components/LandingPage/HeroSection";
import ImpactStats from "../components/LandingPage/ImpactStats";
import HowItWorks from "../components/LandingPage/HowItWorks";
import RewardsSectionIndividual from "../components/LandingPage/RewardsSection";
import RewardsSectionBusiness from "../components/LandingPage/RewardsSectionBusiness";
import Testimonials from "../components/LandingPage/Testimonials";
import FAQSection from "../components/LandingPage/FAQSection";

const LandingPage: React.FC = () => {
  const [role, setRole] = useState<"individual" | "business">("individual");

  return (
    <div className="bg-white text-gray-900 w-full">
      <HeroSection role={role} setRole={setRole} />
      <ImpactStats />
      <HowItWorks />
      {role === "individual" ? (
        <RewardsSectionIndividual />
      ) : (
        <RewardsSectionBusiness />
      )}
      <Testimonials />
      <FAQSection />
    </div>
  );
};

export default LandingPage;
