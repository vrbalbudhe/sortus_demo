import React from "react";
import { useNavigate } from "react-router-dom";

const PickupConfirmed: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/individual-dashboard"); // or change as needed
  };

  return (
    <div className="min-h-screen w-full bg-[#F4FBF4] flex flex-col justify-center items-center px-4 py-8 md:px-12">
      {/* Container for better max width and centering */}
      <div className="w-full max-w-2xl flex flex-col items-center">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="bg-green-700 text-white px-4 py-2 rounded-md font-semibold text-sm shadow-md hover:bg-green-800 transition mb-10 w-full sm:w-auto"
        >
          ← BACK TO DASHBOARD
        </button>

        {/* Confirmation Text */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black leading-tight">
          Your Pickup Has been Confirmed
        </h1>
      </div>
    </div>
  );
};

export default PickupConfirmed;
