import React, { useState } from "react";
import { createPortal } from "react-dom";
import PickupConfirmed from "../Ecostore/PickupConfirm";
 

const CheckoutPage: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showDetails, setShowDetails] = useState(false);
  const [location, setLocation] = useState("");
  const [showPopup, setShowPopup] = useState(false); // control modal

  return (
    <div className="min-h-screen w-full bg-[#EDF4ED] px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="bg-white p-6 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative">
            <img
              src="./images/officeset.jpg"
              alt="Eco Product"
              className="rounded-xl w-full h-[400px] object-cover"
            />
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Eco-Friendly Office Set</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-100 text-green-700 text-sm px-2 py-0.5 rounded">
                Points
              </span>
            </div>
            <span className="text-3xl font-bold text-black leading-none">150</span>
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

            {/* Details Dropdown */}
            <div className="mb-4">
              <div
                className="flex justify-between items-center border px-3 py-2 rounded cursor-pointer"
                onClick={() => setShowDetails(!showDetails)}
              >
                <span className="font-medium text-sm">Details</span>
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

            {/* Checkout Button */}
            <button
              className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition font-semibold"
              onClick={() => setShowPopup(true)}
            >
              CHECK OUT
            </button>
          </div>
        </div>
      </div>

      {/* Pickup Confirmed Popup Modal */}
      {showPopup &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center">
            <div className="bg-white w-[90%] max-w-2xl rounded-2xl shadow-xl p-6 relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
              >
                ×
              </button>
              <PickupConfirmed />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default CheckoutPage;
