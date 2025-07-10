import React from 'react';
import LeafBackground from '../LeafBackground';

const rewards = [
  {
    title: 'Basic Sustainability Certificate',
    points: 75,
    description: 'Your E-Waste Efforts Count!\nGet recognized with:',
    benefits: ['Digital Certificate', 'Impact Report', 'sortUs Badge'],
    icon: './images/orangestar.png',
    bg: 'bg-white',
    textColor: 'text-black',
    badgeColor: 'text-green-600',
    shadow: 'shadow-lg',
  },
  {
    title: 'Premium Sustainability Certificate',
    points: 250,
    description: 'Go Beyond — Get Recognized!',
    benefits: [
      'Digital + Physical Certificates',
      'Quarterly Impact Reports',
      'Premium sortUs Badge',
      'Featured in our Green Directory',
    ],
    icon: './images/bluestar.png',
    bg: 'bg-green-700',
    textColor: 'text-white',
    badgeColor: 'text-white',
    shadow: 'shadow-xl',
  },
  {
    title: 'Corporate Sustainability Partnership',
    points: 1000,
    description: 'Elite Sustainability Leader!',
    benefits: [
      'Custom Branded Certificates',
      'Monthly Impact Analytics',
      'Featured Case Study',
      'Priority Collection',
      'Dedicated Consultant',
    ],
    icon: './images/greenstar.png',
    bg: 'bg-white',
    textColor: 'text-black',
    badgeColor: 'text-green-600',
    shadow: 'shadow-lg',
  },
];

const RewardsSectionBusiness: React.FC = () => {
  return (
    <section className="relative bg-[#EDF4ED] py-20 px-4 text-center overflow-hidden">
      <LeafBackground />

      <h2 className="text-3xl font-bold mb-12 text-[#1d1d1f]">Sustainability Certificates</h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className={`relative w-full md:w-[300px] rounded-[20px] px-6 py-8 ${reward.bg} ${reward.textColor} ${reward.shadow}`}
            style={{
              marginTop: index === 1 ? '-20px' : '0',
            }}
          >
            {/* Star Icon */}
            <img
              src={reward.icon}
              alt="certificate-star"
              className="absolute top-4 right-4 w-10 h-10"
            />

            {/* Points */}
            <h3 className="text-2xl font-bold mb-1">{reward.points}</h3>
            <p className="text-xs mb-4">Required points</p>

            {/* Title */}
            <h4 className="text-lg font-semibold mb-1">{reward.title}</h4>

            {/* Description */}
            <p className="text-sm mb-4 whitespace-pre-line">{reward.description}</p>

            {/* Benefits List */}
            <ul className="text-sm space-y-2 text-left pl-4">
              {reward.benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500">✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RewardsSectionBusiness;
