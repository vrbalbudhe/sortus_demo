import React, { useEffect, useState } from "react";
import RoleNavbar from "../RoleNavbar";

const Business_Dashboard: React.FC = () => {
  const [points, setPoints] = useState({
    yourPoints: 441,
    earnedPoints: 666,
    redeemedPoints: 225,
    levelProgress: 50,
    levelTarget: 900,
  });

  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    let progress = 0;
    const step = 1;
    const interval = setInterval(() => {
      if (progress < points.levelProgress) {
        progress += step;
        setAnimatedProgress(progress);
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [points.levelProgress]);

  const circumference = 339.29;
  const strokeDashoffset =
    circumference - (circumference * animatedProgress) / 100;

  return (
    <div className="min-h-screen bg-[#e6f4ea] pb-20 font-sans">
      <RoleNavbar role="business" />

      <div className="px-6 md:px-16 lg:px-24 pt-10 flex flex-col lg:flex-row justify-between items-start gap-4">
        <div className="flex flex-col gap-6 flex-1 min-w-[300px]">
          <div>
            <h1 className="text-4xl font-extrabold text-black mb-2">
              Welcome User
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              “You’re making a positive impact on the environment.”
            </p>
          </div>

          <div className="bg-white shadow-md rounded-full px-8 py-4 inline-flex items-center gap-4 w-fit">
            <span className="text-orange-500 text-2xl">
              {/* <MdFlashOn /> */}
            </span>
            <div>
              <p className="text-base font-bold text-black">2x Points Active</p>
              <p className="text-sm text-gray-600">
                Earn double points in next 22h 14 min
              </p>
            </div>
          </div>
        </div>

        <div className="w-[220px] flex-shrink-0 mt-2 mr-4 lg:mt-0">
          <div className="w-full h-[220px] relative">
            <svg className="w-full h-full" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#d9d9d9"
                strokeWidth="12"
              />
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
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#f2994a] text-3xl font-bold">
                {animatedProgress}%
              </span>
            </div>
          </div>
          <div className="mt-4 text-center text-sm text-gray-700 leading-5">
            <span className="text-green-700 font-medium">occasional user</span>
            <br />
            <span className="font-bold text-black">
              earn{" "}
              <span className="text-green-700">
                {points.levelTarget} points
              </span>{" "}
              to get premium certificate
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 pt-6">
        <div className="bg-white shadow-md rounded-2xl p-5 flex items-center justify-between w-full h-[100px]">
          <div className="text-left leading-tight">
            <p className="font-bold text-black text-base">Green Points</p>
            <p className="font-bold text-black text-base">Wallet</p>
          </div>

          <div className="mx-6">
            <img
              src="/images/wallet.png"
              alt="wallet"
              className="w-[48px] h-[48px]"
            />
          </div>

          <div className="flex flex-1 justify-around text-center">
            <div>
              <p className="text-sm text-gray-600 font-bold">Your points</p>
              <p className="text-xl font-bold text-black">
                {points.yourPoints}
              </p>
            </div>
            <div className="border-l border-gray-300 h-10 mx-4" />
            <div>
              <p className="text-sm text-gray-600 font-bold">Earned points</p>
              <p className="text-xl font-bold text-black">
                {points.earnedPoints}
              </p>
            </div>
            <div className="border-l border-gray-300 h-10 mx-4" />
            <div>
              <p className="text-sm text-gray-600 font-bold">Redeemed points</p>
              <p className="text-xl font-bold text-black">
                {points.redeemedPoints}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg cursor-pointer h-[220px] flex flex-col justify-center">
            {/* <FiUpload className="text-green-700 text-4xl mx-auto mb-3" /> */}
            <p className="font-semibold text-black text-lg">
              Bulk Pickup Request
            </p>
            <p className="text-sm text-orange-500 mt-2">
              Upload item list and request a pickup
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg cursor-pointer h-[220px] flex flex-col justify-center">
            {/* <BsFillFileEarmarkCheckFill className="text-green-700 text-4xl mx-auto mb-3" /> */}
            <p className="font-semibold text-black text-lg">
              Download Certificates
            </p>
            <p className="text-sm text-orange-500 mt-2">
              Download all your certificates
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg cursor-pointer h-[220px] flex flex-col justify-center">
            {/* <TbReportAnalytics className="text-green-700 text-4xl mx-auto mb-3" /> */}
            <p className="font-semibold text-black text-lg">
              Monthly Sustainable Reports
            </p>
            <p className="text-sm text-orange-500 mt-2">
              Download all your reports
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24">
        <div className="bg-white shadow-md rounded-xl p-6 flex justify-between items-center">
          <p className="text-xl font-semibold text-black">Redeem Your Points</p>
          <div className="flex items-center gap-2">
            {/* <FaGift className="text-green-700 text-3xl" /> */}
            {/* <IoMdArrowForward className="text-orange-500 text-2xl" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business_Dashboard;
