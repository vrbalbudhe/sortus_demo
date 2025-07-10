import React from 'react';
import RoleNavbar from '../RoleNavbar';
// import { MdFlashOn } from 'react-icons/md';
// import { FaTruck, FaGift } from 'react-icons/fa';
// import { IoMdArrowForward } from 'react-icons/io';

const Individual_Dashboard: React.FC = () => {
  const progressPercent = 70;
  const circumference = 339.29;
  const strokeDashoffset = circumference - (circumference * progressPercent) / 100;

  return (
    <div className="min-h-screen bg-[#EDF4ED] pb-20 font-sans">
       <RoleNavbar role="individual" />

      {/* Welcome & Progress Row */}
      <div className="px-6 md:px-16 lg:px-24 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 flex-wrap">
          {/* Welcome Section */}
          <div className="flex-1 min-w-[300px]">
            <h1 className="text-4xl font-extrabold text-black mb-3">Welcome User</h1>
            <p className="text-lg text-gray-700 mb-6">“You’re making a positive impact on the environment.”</p>

            {/* 2x Points Active */}
            <div className="bg-white shadow-md rounded-full px-8 py-4 inline-flex items-center gap-4 w-fit mb-2">
              {/* <MdFlashOn className="text-orange-500 text-2xl" /> */}
              <div>
                <p className="text-base font-bold text-black">2x Points Active</p>
                <p className="text-sm text-gray-600">Earn double points in next 22h 14 min</p>
              </div>
            </div>
          </div>

          {/* Progress Circle */}
          <div className="w-[240px] flex-shrink-0 mt-2">
            <div className="w-full h-[240px] relative">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#d9d9d9" strokeWidth="12" />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  fill="none"
                  stroke="#2f7a33"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  transform="rotate(-90 60 60)"
                  className="transition-all duration-700"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#f2994a] text-3xl font-bold">{progressPercent}%</span>
              </div>
            </div>
            <div className="mt-4 text-center text-base text-gray-700 leading-5">
              <span className="text-green-700 font-medium">occasional user</span><br />
              <span className="font-bold text-black">
                earn <span className="text-green-700">300 points</span> to level up
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Green Points Wallet (below Welcome & Chart) */}
      <div className="px-6 md:px-16 lg:px-24 pt-6">
        <div className="bg-white shadow-md rounded-2xl p-5 flex items-center justify-between w-full max-w-full h-[100px]">
          {/* Left: Wallet Label */}
          <div className="text-left leading-tight">
            <p className="font-bold text-black text-base">Green Points</p>
            <p className="font-bold text-black text-base">Wallet</p>
          </div>

          {/* Center: Wallet Icon */}
          <div className="mx-4">
            <img src="/images/wallet.png" alt="wallet" className="w-[48px] h-[48px]" />
          </div>

          {/* Divider */}
          <div className="w-px h-14 bg-gray-300 mx-4" />

          {/* Points Summary */}
          <div className="flex flex-1 justify-around text-center">
            <div>
              <p className="text-sm text-gray-600 font-bold">Your points</p>
              <p className="text-xl font-bold text-black">441</p>
            </div>
            <div className="border-l border-gray-300 h-10 mx-4" />
            <div>
              <p className="text-sm text-gray-600 font-bold">Earned points</p>
              <p className="text-xl font-bold text-black">666</p>
            </div>
            <div className="border-l border-gray-300 h-10 mx-4" />
            <div>
              <p className="text-sm text-gray-600 font-bold">Redeemed points</p>
              <p className="text-xl font-bold text-black">225</p>
            </div>
          </div>
        </div>
      </div>

      {/* Submit & Redeem Buttons */}
      <div className="px-6 md:px-16 lg:px-24 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {/* Submit E-Waste */}
          <button className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center text-left h-[100px]">
            <div className="text-gray-800 font-semibold text-lg">
              <p className="leading-tight">Submit<br />E-Waste</p>
            </div>
            <div className="flex items-center gap-3">
              {/* <FaTruck className="text-green-700 text-4xl" /> */}
              {/* <IoMdArrowForward className="text-orange-500 text-2xl" /> */}
            </div>
          </button>

          {/* Redeem Your Points */}
          <button className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center text-left h-[100px]">
            <div className="text-gray-800 font-semibold text-lg">
              <p className="leading-tight">Redeem Your<br />Points</p>
            </div>
            <div className="flex items-center gap-3">
              {/* <FaGift className="text-green-700 text-4xl" /> */}
              {/* <IoMdArrowForward className="text-orange-500 text-2xl" /> */}
            </div>
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-6 md:px-16 lg:px-24 pt-10">
        <div className="bg-white shadow-md rounded-xl p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-bold text-black">Recent Transactions</h2>
            <a href="#" className="text-md uppercase text-green-700 font-semibold">See All Transactions</a>
          </div>

          <div className="divide-y text-base">
            <div className="flex justify-between py-4">
              <div>
                <p className="font-semibold text-black">Bamboo Water Bottle (2x Value)</p>
                <p className="text-sm text-gray-500 mt-1">6/1/2025</p>
              </div>
              <span className="text-red-600 font-bold text-md">-150 Points</span>
            </div>

            <div className="flex justify-between py-4">
              <div>
                <p className="font-semibold text-black">Battery</p>
                <p className="text-sm text-gray-500 mt-1">6/1/2025</p>
              </div>
              <span className="text-green-600 font-bold text-md">+80 Points</span>
            </div>

            <div className="flex justify-between py-4">
              <div>
                <p className="font-semibold text-black">Fridge</p>
                <p className="text-sm text-gray-500 mt-1">6/1/2025</p>
              </div>
              <span className="text-green-600 font-bold text-md">+300 Points</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual_Dashboard;
