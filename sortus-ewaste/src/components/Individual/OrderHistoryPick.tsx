import React from "react";
import RoleNavbar from "../RoleNavbar";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import { wrapIcon } from "../../utlis/IconWrapper";

import { useNavigate } from "react-router-dom";

const OrderHistory: React.FC = () => {
  const IoMdArrowDownWrapped = wrapIcon(IoIcons.IoMdArrowDown);
  const navigate = useNavigate();
  const MdFlashOn = wrapIcon(MdIcons.MdFlashOn);

  const progressPercent = 70;
  const circumference = 339.29;
  const strokeDashoffset =
    circumference - (circumference * progressPercent) / 100;

  const orders = [
    {
      id: "001230101",
      location: "Swargate, Pune",
      date: "21 January, 2025",
      items: "Fridge, Laptop",
    },
    {
      id: "001230102",
      location: "Lohegaon, Pune",
      date: "22 January, 2025",
      items: "Mobile, Tablet",
    },
    {
      id: "001230103",
      location: "Kothrud, Pune",
      date: "23 January, 2025",
      items: "TV, Fan",
    },
  ];

  const handleTrackPickup = (pickupId: string) => {
    navigate(`/individual/track/${pickupId}`);
  };

  const handleViewDetails = () => {
    console.log("View pickup details clicked");
  };

  const handleCancelPickup = () => {
    console.log("Cancel pickup clicked");
  };

  return (
    <div className="min-h-screen bg-[#e6f4ea] pb-20 font-sans overflow-x-hidden">
      <RoleNavbar role={"individual"} />

      {/* Top Section */}
      <div className="px-6 md:px-16 lg:px-24 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 flex-wrap">
          {/* Welcome Left */}
          <div className="flex-1 min-w-[300px]">
            <h1 className="text-4xl font-extrabold text-black mb-3">
              Welcome User
            </h1>
            <p className="text-lg text-gray-700 font-bold mb-6">
              “You’re making a positive impact on the environment.”
            </p>

            <div className="bg-white shadow-md rounded-full px-8 py-4 inline-flex items-center gap-4 w-fit mb-4">
              <MdFlashOn className="text-orange-500 text-2xl" />
              <div>
                <p className="text-base font-bold text-black">
                  2x Points Active
                </p>
                <p className="text-sm text-gray-600">
                  Earn double points in next 22h 14 min
                </p>
              </div>
            </div>
          </div>

          {/* Progress Circle */}
          <div className="w-[240px] flex-shrink-0 mt-2">
            <div className="w-full h-[240px] relative">
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
                  strokeDasharray={circumference.toString()}
                  strokeDashoffset={strokeDashoffset.toString()}
                  transform="rotate(-90 60 60)"
                  className="transition-all duration-700"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#f2994a] text-3xl font-bold">
                  {progressPercent}%
                </span>
              </div>
            </div>
            <div className="mt-4 text-center text-base text-gray-700 leading-5">
              <span className="text-green-700 font-medium">
                occasional user
              </span>
              <br />
              <span className="font-bold text-black">
                earn <span className="text-green-700">300 points</span> to level
                up
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Pickup History Section */}
      <div className="px-6 md:px-16 lg:px-24 pt-10">
        <div className="bg-white shadow-md rounded-xl p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold text-black mb-1">
                Pickup History
              </p>
              <p className="text-sm text-gray-500">{orders.length} orders</p>
            </div>

            <div>
              <label htmlFor="orderFilter" className="sr-only">
                Filter Orders
              </label>
              <select
                id="orderFilter"
                aria-label="Filter Orders"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option>Pickup</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Order Cards */}
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow-md rounded-xl p-6 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            {/* Left Section */}
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div>
                <img
                  src="/truck.png"
                  alt="Truck Icon"
                  className="w-[140px] h-[80px] object-cover rounded-md"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/140x80")
                  }
                />
              </div>
              <div className="leading-relaxed">
                <p className="text-lg font-bold text-black mb-1">
                  Pickup Summary
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-500">
                    Pickup ID:
                  </span>{" "}
                  <span className="text-[#3c3c3c]">#{order.id}</span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-500">
                    Scheduled:
                  </span>{" "}
                  <span className="text-black font-medium">{order.date}</span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-500">Location:</span>{" "}
                  <span className="text-black font-medium">
                    {order.location}
                  </span>
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-500">
                    Item Category:
                  </span>{" "}
                  <span className="text-black font-medium">{order.items}</span>
                </p>
              </div>
            </div>

            {/* Right - Action Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button
                onClick={() => handleTrackPickup(order.id)}
                className="bg-green-700 text-white rounded-md px-4 py-2 text-sm font-semibold w-full md:w-auto"
              >
                TRACK PICKUP
              </button>
              <button
                onClick={handleViewDetails}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold text-black w-full md:w-auto"
              >
                VIEW PICKUP DETAILS
              </button>
              <button
                onClick={handleCancelPickup}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm font-semibold text-black w-full md:w-auto"
              >
                CANCEL PICKUP
              </button>
            </div>
          </div>
        ))}

        {/* Load More Button */}
        <div className="flex justify-center">
          <button
            className="bg-white shadow-md rounded-full w-12 h-12 flex items-center justify-center hover:shadow-lg"
            aria-label="Load more orders"
            title="Load more orders"
          >
            <IoMdArrowDownWrapped className="text-2xl text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
