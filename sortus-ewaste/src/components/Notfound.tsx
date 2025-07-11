import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col justify-center items-center bg-[#e6f4ea] text-center px-4 py-12">
      {/* Error Code */}
      <h1 className="text-[72px] sm:text-[96px] md:text-[120px] lg:text-[144px] font-extrabold text-green-800 drop-shadow-sm mb-4">
        404
      </h1>

      {/* Error Text */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Page Not Found
      </h2>

      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-8 px-2">
        Oops! The page you’re looking for doesn’t exist or has been moved. Let’s get you back to something useful.
      </p>

      {/* Button */}
      <button
        onClick={handleGoHome}
        className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
