import React from "react";
import RoleNavbar from "../RoleNavbar";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import { wrapIcon } from "../../utlis/IconWrapper";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet icon issue on build
delete (L.Icon.Default.prototype as any)._getIconUrl;

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const OrderHistoryPick: React.FC = () => {
  const IoMdArrowDownWrapped = wrapIcon(IoIcons.IoMdArrowDown);
  const MdFlashOn = wrapIcon(MdIcons.MdFlashOn);
  const progressPercent = 70;
  const circumference = 339.29;
  const strokeDashoffset =
    circumference - (circumference * progressPercent) / 100;
  const pickupLocation: [number, number] = [18.5018, 73.8625]; // Swargate, Pune

  return (
    <div className="min-h-screen bg-[#e6f4ea] font-sans">
      <RoleNavbar role={"individual"} />

      {/* Welcome & Progress */}
      <div className="px-6 md:px-16 lg:px-24 pt-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 flex-wrap">
          {/* Welcome Section */}
          <div className="flex-1 min-w-[300px]">
            <h1 className="text-4xl font-extrabold text-black mb-3">
              Welcome User
            </h1>
            <p className="text-lg text-gray-700 mb-6 font-semibold">
              “You’re making a positive impact on the environment.”
            </p>
            <div className="bg-white shadow-md rounded-full px-8 py-4 inline-flex items-center gap-4 w-fit mb-2">
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
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
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

      {/* Pickup History Header */}
      <div className="px-6 md:px-20 pt-10">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-bold text-black">Pickup History</h2>
              <p className="text-gray-600 text-sm">3 orders</p>
            </div>
            <div className="relative">
              <select
                className="appearance-none border border-gray-300 rounded-md px-4 py-2 pr-10 bg-white text-sm text-black"
                aria-label="Filter pickup history"
              >
                <option>Pick</option>
                <option>Completed</option>
                <option>Cancelled</option>
              </select>
              <IoMdArrowDownWrapped className="absolute right-3 top-2.5 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Pickup Summary + Map */}
      <div className="px-6 md:px-20 pt-6 pb-10">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Summary Block */}
          <div className="bg-white border rounded-xl shadow p-6 flex items-start gap-6 w-full lg:w-1/2">
            <img
              src="/images/pickup.png"
              alt="Pickup Vehicle"
              className="w-32 h-32 object-contain"
              onError={(e) =>
                ((e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/128")
              }
            />
            <div>
              <h3 className="font-bold text-black text-lg mb-1">
                Pickup Summary
              </h3>
              <p className="text-gray-500 text-sm mb-2">Pickup ID: #XXXXX</p>
              <p className="text-sm text-gray-600">
                Scheduled: <b>21 January, 2025</b>
              </p>
              <p className="text-sm text-gray-600">
                Location: <b>Swargate, Pune</b>
              </p>
              <p className="text-sm text-gray-600">
                Item Category: <b>Fridge, Laptop</b>
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Time: <b>09:10 am</b>
              </p>
              <div className="flex flex-col gap-2">
                <button className="border border-green-700 text-green-700 rounded-md py-1 text-sm font-semibold hover:bg-green-50">
                  View Pickup Details
                </button>
                <button className="border border-green-700 text-green-700 rounded-md py-1 text-sm font-semibold hover:bg-green-50">
                  Cancel Pickup
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow h-[300px] w-full lg:w-1/2 bg-white">
            <MapContainer
              center={pickupLocation}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={pickupLocation} icon={customIcon}>
                <Popup>Pickup Location: Swargate, Pune</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="flex justify-center py-4">
        <img
          src="/images/scroll.png"
          alt="Scroll Down"
          className="w-10 h-10"
          onError={(e) =>
            ((e.target as HTMLImageElement).src =
              "https://via.placeholder.com/40")
          }
        />
      </div>
    </div>
  );
};

export default OrderHistoryPick;
