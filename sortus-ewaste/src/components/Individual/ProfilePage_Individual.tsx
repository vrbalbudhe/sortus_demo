import React from 'react';
import RoleNavbar from '../RoleNavbar';

const ProfilePage_Individual: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#EDF4ED] text-gray-800 font-sans">
       <RoleNavbar role="individual" />

      {/* Main Content */}
      <div className="p-6 max-w-6xl mx-auto mt-10 flex gap-12 items-start">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500">
            <span>Image</span>
          </div>
          <a href="#" className="text-xs text-green-700 mt-2 underline">
            Change Profile Photo?
          </a>
        </div>

        {/* Profile Details */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Profile Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            <div>
              <label className="text-sm font-semibold block mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                defaultValue="Ram Sharma"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1">Phone no.</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                defaultValue="+91 1234567890"
              />
            </div>
            <div>
              <label className="text-sm font-semibold block mb-1">Mail ID</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                defaultValue="ramsharma@gmail.com"
              />
            </div>
          </div>

          <a href="#" className="text-xs text-green-700 mt-2 inline-block underline">
            Change Profile Details?
          </a>

          {/* Preferences */}
          <div className="mt-10">
            <h3 className="text-lg font-bold mb-4">Preferences</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold block mb-1">Notification Preference</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Value</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold block mb-1">Dark/Light Mode</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
            </div>

            {/* Pickup Preference */}
            <div className="mt-6">
              <h4 className="font-semibold mb-1">Pickup Preference</h4>
              <textarea
                className="w-full p-3 border rounded-md text-sm"
                rows={4}
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              />
              <a href="#" className="text-xs text-green-700 mt-2 inline-block underline">
                Change Default Address?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage_Individual;
