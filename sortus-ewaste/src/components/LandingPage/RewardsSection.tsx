import React from 'react';
import LeafBackground from '../LeafBackground'; // Adjust path as per project structure

const rewards = [
  { title: 'DESK ORGANIZER', points: '100', img: './images/deskorganizer.png' },
  { title: 'LAPTOP SLEEVE', points: '120', img: './images/laptopsleeve.png' },
  { title: 'PLANT SET', points: '200', img: './images/plantset.png' },
];

const RewardsSection: React.FC = () => {
  return (
    <section className="relative text-center py-16 px-4 bg-[#EDF4ED] overflow-hidden">
      {/* Floating animated leaves */}
      <LeafBackground />

      {/* Main heading */}
      <h2 className="text-[2.2rem] font-bold mb-2 text-[#1d1d1f] z-10 relative">Time to Treat Yourself!</h2>
      <p className="text-gray-600 text-base mb-10 z-10 relative">
        Use your Green Points to redeem sustainable goodies!
      </p>

      {/* Reward cards */}
      <div className="flex flex-wrap justify-center gap-10 relative z-10">
        {rewards.map((reward) => (
          <div
            key={reward.title}
            className="bg-[#164e3f] text-white w-[220px] h-[260px] rounded-[40px_0_40px_40px] flex flex-col items-center p-6 shadow-md"
          >
            <img
              src={reward.img}
              alt={reward.title}
              className="w-[100px] h-[100px] rounded-full bg-[#EDF4ED] object-contain p-2 mb-5"
            />
            <p className="text-lg font-semibold">{reward.title}</p>
            <p className="text-sm mt-2 text-[#c8f5d4]">{reward.points} GREEN POINTS</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RewardsSection;
