import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Components
import HeroSection from "../components/LandingPage/HeroSection";
import ImpactStats from "../components/LandingPage/ImpactStats";
import ImpactStatsBusiness from "../components/LandingPage/ImapctStatsBussiness";
import HowItWorks from "../components/LandingPage/HowItWorks";
import RewardsSectionIndividual from "../components/LandingPage/RewardsSection";
import RewardsSectionBusiness from "../components/LandingPage/RewardsSectionBusiness";
import Testimonials from "../components/LandingPage/Testimonials";
import FAQSection from "../components/LandingPage/FAQSection";
import FAQmore from "../components/LandingPage/FAQmore";

const LandingPage: React.FC = () => {
  const [role, setRole] = useState<"individual" | "business">("individual");
  const location = useLocation();

  // Scroll smoothly to an element if location.hash exists
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  // Show FAQmore if path exactly matches /faq-more
  if (location.pathname === "/faq-more") {
    return <FAQmore />;
  }

  return (
    <div className="bg-white text-gray-900 w-full">
      <HeroSection role={role} setRole={setRole} />

      <div id="impact-stats">
        {role === "individual" ? <ImpactStats /> : <ImpactStatsBusiness />}
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>

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
