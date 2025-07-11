import React from 'react';
import Navbar_Logistic from '../NavbarLogistic';

const LogisticDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#e6f4ea] font-sans overflow-x-hidden">
      <Navbar_Logistic />

      {/* Top Section */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-24 pt-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-36">
          {/* Welcome + Summary */}
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-black">Welcome Agent</h1>
            <p className="text-base sm:text-lg text-gray-800">Assigned Pickups Today: 5</p>
            <p className="text-base sm:text-lg text-gray-800">Pending Updates: 2</p>
          </div>

          {/* Progress Chart */}
          <div className="flex flex-col items-center w-[200px] sm:w-[220px]">
            <div className="w-full h-[200px] sm:h-[220px] relative">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <circle cx="18" cy="18" r="16" fill="none" stroke="#e5e5e5" strokeWidth="4" />
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="#2f7a33"
                  strokeWidth="4"
                  strokeDasharray="40, 100"
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-[#f2994a]">40%</span>
              </div>
            </div>
            <div className="text-center mt-2 text-sm text-green-700 font-medium leading-tight">
              Complete tasks<br />to get rewarded
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-24 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Assigned Pickups Table */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold mb-4">Assigned Pickups</h2>
          <div className="bg-white shadow-md rounded-xl overflow-auto max-w-full">
            <table className="w-full text-sm text-left table-auto">
              <thead className="text-gray-600 bg-gray-100">
                <tr>
                  <th className="px-4 py-4">Pickup ID</th>
                  <th className="px-4 py-4">User</th>
                  <th className="px-4 py-4">Location</th>
                  <th className="px-4 py-4">Date/Time</th>
                  <th className="px-4 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {[
                  ['001230101', 'Username', 'Swargate', '18/06/2025', 'Completed'],
                  ['001230102', 'Username', 'Lohegaon', '18/06/2025', 'In-Progress'],
                  ['001230103', 'Username', 'Kothrud', '18/06/2025', 'Completed'],
                  ['001230104', 'Username', 'Moshi', '18/06/2025', 'In-Progress'],
                  ['001230105', 'Username', 'Alandi', '18/06/2025', 'Cancelled'],
                  ['001230106', 'Username', 'Baner', '18/06/2025', 'Completed'],
                  ['001230107', 'Username', 'Hadapsar', '18/06/2025', 'Completed'],
                ].map(([id, user, loc, date, status]) => (
                  <tr key={id}>
                    <td className="px-4 py-4 font-medium">{id}</td>
                    <td className="px-4 py-4">{user}</td>
                    <td className="px-4 py-4">{loc}</td>
                    <td className="px-4 py-4">{date}</td>
                    <td
                      className={`px-4 py-4 font-semibold ${
                        status === 'Completed'
                          ? 'text-green-600'
                          : status === 'In-Progress'
                          ? 'text-orange-500'
                          : 'text-red-600'
                      }`}
                    >
                      {status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white shadow-md rounded-xl p-6 w-full">
            <h3 className="text-xl font-extrabold mb-6">Quick Stats</h3>
            <div className="space-y-5 text-[16px] text-black">
              <div className="flex justify-between">
                <span>Total Pickups<br />Done</span>
                <span className="font-bold">122</span>
              </div>
              <div className="flex justify-between">
                <span>Weight<br />Collected</span>
                <span className="font-bold">1215 <span className="font-semibold">Kg</span></span>
              </div>
              <div className="flex justify-between">
                <span>Average<br />Rating</span>
                <span className="font-bold">4.7</span>
              </div>
            </div>
          </div>

          {/* Update Pickup Form */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">Update Pickup</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="pickupId" className="block font-semibold mb-1">Pickup ID</label>
                <input
                  id="pickupId"
                  placeholder="Enter Pickup ID"
                  type="text"
                  className="w-full border border-gray-400 rounded-md px-4 py-2 text-orange-500 font-semibold outline-none"
                  defaultValue="0012301021"
                />
              </div>
              <div>
                <label htmlFor="weight" className="block font-semibold mb-1">Weight (kg)</label>
                <input
                  id="weight"
                  placeholder="Enter weight"
                  type="text"
                  className="w-full border border-gray-400 rounded-md px-4 py-2 text-orange-500 font-semibold outline-none"
                  defaultValue="31 kg"
                />
              </div>
              <div>
                <label htmlFor="quality" className="block font-semibold mb-1">Quality</label>
                <select
                  id="quality"
                  className="w-full border border-gray-400 rounded-md px-4 py-2 text-orange-500 font-semibold bg-white outline-none"
                  defaultValue=""
                >
                  <option value="" disabled hidden>Select quality</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Poor">Poor</option>
                </select>
              </div>
              <div>
                <label htmlFor="notes" className="block font-semibold mb-1">Notes</label>
                <input
                  id="notes"
                  placeholder="Enter notes"
                  type="text"
                  className="w-full border border-gray-400 rounded-md px-4 py-2"
                />
                <p className="text-xs text-gray-500 mt-1">Information about the product</p>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-2 rounded-md"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticDashboard;
