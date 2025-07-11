import React from 'react';
import NavbarAdmin from '../NavbarAdmin';

const ProfilePermissionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F7EE] text-gray-800 font-sans">
      <NavbarAdmin />

      <div className="p-6 max-w-5xl mx-auto mt-8 flex gap-10 items-start">
        {/* Profile Photo */}
        <div className="flex flex-col items-center">
          <div className="w-44 h-44 bg-gray-300 rounded-xl flex items-center justify-center">
            <span>Image</span>
          </div>
          <a href="#" className="text-xs text-green-700 mt-2 underline">
            Change Profile Photo?
          </a>
        </div>

        {/* Profile Details */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Profile Details</h2>

          <div className="mb-5">
            <label className="text-sm font-semibold block mb-1">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              defaultValue="Ram Sharma"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
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

          {/* Permissions Section */}
          <div className="mt-10">
            <h3 className="text-lg font-bold mb-2">Permissions</h3>
            <div className="border border-gray-300 rounded-md p-4 bg-white">
              <p className="text-sm text-gray-600">No permissions assigned yet.</p>
              {/* You can replace this with checkbox/toggle based roles */}
              {/*
              <div className="flex items-center space-x-3 mt-2">
                <input type="checkbox" className="form-checkbox" checked />
                <label className="text-sm">Can Edit Orders</label>
              </div>
              */}
            </div>
          </div>

          {/* Preferences */}
          <div className="mt-10">
            <h3 className="text-lg font-bold mb-3">Preferences</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePermissionsPage;
