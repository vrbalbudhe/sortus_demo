import React from 'react';
import NavbarLogistic from '../NavbarLogistic';

const  MyPickupPage : React.FC = () => {
  const assignedPickups = [
    { id: '001230101', user: 'Username', location: 'Swargate', date: '18/06/2025', status: 'Completed' },
    { id: '001230121', user: 'Username', location: 'Lohegaon', date: '18/06/2025', status: 'In-Progress' },
    { id: '001230103', user: 'Username', location: 'Kothrud', date: '18/06/2025', status: 'Completed' },
    { id: '001230104', user: 'Username', location: 'Moshi', date: '18/06/2025', status: 'In-Progress' },
    { id: '0012301051', user: 'Username', location: 'Alandi', date: '18/06/2025', status: 'Cancelled' },
  ];

  const previousPickups = Array(10).fill('0012301011');

  const progressPercent = 40;
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progressPercent / 100) * circumference;

  return (
    <div className="min-h-screen bg-[#f1f9f4] font-sans pb-10">
      <NavbarLogistic  />

      {/* Header and Progress */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 pt-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          {/* Welcome Text */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-3">
              Welcome Agent
            </h1>
            <p className="text-base sm:text-lg font-semibold text-gray-800">
              Assigned Pickups Today: 5
            </p>
            <p className="text-base sm:text-lg font-semibold text-gray-800">
              Pending Updates: 2
            </p>
          </div>

          {/* Circular Progress */}
          <div className="flex flex-col items-center">
            <div className="w-[150px] sm:w-[180px] md:w-[200px] h-[150px] sm:h-[180px] md:h-[200px] relative">
              <svg viewBox="0 0 36 36" className="w-full h-full">
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="4"
                />
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  fill="none"
                  stroke="#2f7a33"
                  strokeWidth="4"
                  strokeDasharray={circumference.toFixed(2)}
                  strokeDashoffset={offset.toFixed(2)}
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#f2994a]">
                  {progressPercent}%
                </span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-green-700 text-center mt-2 font-medium leading-tight">
              Complete tasks<br />to get rewarded
            </p>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Assigned Pickup Table */}
        <div className="lg:col-span-2">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Assigned Pickups</h2>
          <div className="bg-white shadow-md rounded-xl overflow-x-auto">
            <table className="min-w-full text-sm sm:text-base text-left">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Pickup Id</th>
                  <th className="py-4 px-4 sm:px-6">User</th>
                  <th className="py-4 px-4 sm:px-6">Location</th>
                  <th className="py-4 px-4 sm:px-6">Date/Time</th>
                  <th className="py-4 px-4 sm:px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {assignedPickups.map(({ id, user, location, date, status }) => (
                  <tr
                    key={id}
                    className="hover:bg-gray-50 transition duration-200 ease-in-out"
                  >
                    <td className="px-4 sm:px-6 py-4 font-medium">{id}</td>
                    <td className="px-4 sm:px-6 py-4">{user}</td>
                    <td className="px-4 sm:px-6 py-4">{location}</td>
                    <td className="px-4 sm:px-6 py-4">{date}</td>
                    <td
                      className={`px-4 sm:px-6 py-4 font-semibold ${
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

        {/* Previous Pickups List */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Previous Pickups</h2>
          <div className="space-y-4 text-sm sm:text-base">
            {previousPickups.map((pickup, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span>{pickup}</span>
                <button className="text-green-800 font-semibold hover:underline">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPickupPage;
