import React, { useState } from "react";
// import { FaHeart } from 'react-icons/fa';
// import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#EDF4ED] px-4 py-8">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Product + Checkout Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Panel - Image */}
          <div className="relative">
            <img
              src="./images/officeset.jpg"
              alt="Eco Product"
              className="rounded-xl w-full h-[400px] object-cover"
            />
            {/* <FaHeart
                            onClick={() => setLiked(!liked)}
                            className={`absolute top-4 left-4 text-3xl p-2 rounded-full border-2 transition ${liked
                                ? 'text-pink-500 border-pink-500 bg-white'
                                : 'text-gray-400 border-white bg-white'
                                } cursor-pointer`}
                        /> */}
          </div>

          {/* Right Panel - Details */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Eco-Friendly Office Set</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-100 text-green-700 text-sm px-2 py-0.5 rounded">
                Points
              </span>
            </div>
            <span className="text-3xl font-bold text-black leading-none">
              150
            </span>
            <p className="text-sm text-gray-600 mb-4">Office Supplies</p>

            {/* Quantity */}
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Quantity</label>
              <div className="flex items-center border rounded w-20">
                <button
                  className="px-2 py-1 text-lg"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="flex-grow text-center">{quantity}</span>
                <button
                  className="px-2 py-1 text-lg"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="mb-4">
              <div
                className="flex justify-between items-center border px-3 py-2 rounded cursor-pointer"
                onClick={() => setShowDetails(!showDetails)}
              >
                <span className="font-medium text-sm">Details</span>
                {/* {showDetails ? <IoChevronUp /> : <IoChevronDown />} */}
              </div>
              {showDetails && (
                <div className="mt-2 text-xs text-gray-600 px-1">
                  Answer the frequently asked question in a simple sentence.
                </div>
              )}
            </div>

            {/* Location */}
            <div className="mb-6">
              <label className="block mb-1 text-sm font-medium">Location</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
              >
                <option value="">Select Location</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nashik">Nashik</option>
              </select>
            </div>

            {/* Confirm Checkout Button */}
            <button
              className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition font-semibold"
              onClick={() => navigate("/cancel-order")}
            >
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
