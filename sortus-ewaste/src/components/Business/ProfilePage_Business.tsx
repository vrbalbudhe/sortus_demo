import React from 'react';
import RoleNavbar from '../RoleNavbar';

const ProfilePage_Business: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F7EE] text-gray-800 font-['Poppins']">
      <RoleNavbar role="business" />

      <div className="max-w-6xl mx-auto p-6 mt-10 flex flex-col lg:flex-row gap-12">
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 bg-gray-300 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Image</span>
          </div>
          <a href="#" className="text-xs text-green-700 mt-2 underline">
            Change Profile Photo?
          </a>
        </div>

        {/* Profile Details + Preferences */}
        <div className="flex-1">
          {/* Profile Details */}
          <h2 className="text-2xl font-bold mb-6">Profile Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Business Name full width */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold block mb-1">Business Name</label>
              <input
                type="text"
                defaultValue="Ram Sharma Business"
                className="w-full h-[44px] px-3 border border-gray-300 bg-white rounded-md text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block mb-1">Business Phone no.</label>
              <input
                type="text"
                defaultValue="+020 12345678"
                className="w-full h-[44px] px-3 border border-gray-300 bg-white rounded-md text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block mb-1">Business Mail ID</label>
              <input
                type="email"
                defaultValue="ramsharmainstitute@business.in"
                className="w-full h-[44px] px-3 border border-gray-300 bg-white rounded-md text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block mb-1">GST no.</label>
              <input
                type="text"
                defaultValue="1A2B3C4E5F6G7HI"
                className="w-full h-[44px] px-3 border border-gray-300 bg-white rounded-md text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block mb-1">Corporate ID</label>
              <input
                type="text"
                defaultValue="XXXXXXX"
                className="w-full h-[44px] px-3 border border-gray-300 bg-white rounded-md text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block mb-1">Business Location</label>
              <input
                type="text"
                defaultValue="XXXXXXX"
                className="w-full h-[44px] px-3 border border-gray-300 bg-white rounded-md text-sm"
              />
            </div>
          </div>

          <a href="#" className="text-xs text-green-700 mt-3 inline-block underline">
            Change Profile Details?
          </a>

          {/* Preferences */}
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-6">Preferences</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold block mb-1">Notification Preference</label>
                <select className="w-full h-[44px] px-3 border border-gray-300 bg-white rounded-md text-sm">
                  <option>Value</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold block mb-1">Dark/Light Mode</label>
                <select className="w-full h-[44px] px-3 border border-gray-300 bg-white rounded-md text-sm">
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>
            </div>

            {/* Pickup Preference */}
            <div className="mt-6">
              <label className="text-sm font-semibold block mb-1">Pickup Preference</label>
              <textarea
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-md text-sm bg-white"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus."
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

export default ProfilePage_Business;
