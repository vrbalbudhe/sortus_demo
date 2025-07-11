import React from 'react';
import NavbarLogistic from '../NavbarLogistic';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Download the below libraries
// npm install --save-dev @types/leaflet
// npm install leaflet react-leaflet

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ProfilePageLogistic: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0F7EE] text-gray-800 font-sans overflow-x-hidden">
      <NavbarLogistic />

      <div className="py-6 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left - Profile Photo */}
          <div className="flex flex-col items-center w-full md:w-1/4">
            <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-300 rounded-xl flex items-center justify-center">
              <span>Image</span>
            </div>
            <a href="#" className="text-xs text-green-700 mt-2 underline">
              Change Profile Photo?
            </a>
          </div>

          {/* Right - Profile Details */}
          <div className="flex-1 w-full">
            {/* Profile Details */}
            <h2 className="text-xl font-bold mb-4">Profile Details</h2>

            <div className="mb-5">
              <label className="text-sm font-semibold block mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                defaultValue="Ram Sharma"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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

            <a href="#" className="text-xs text-green-700 inline-block underline">
              Change Profile Details?
            </a>

            {/* Pickup Details */}
            <div className="mt-10">
              <h3 className="text-lg font-bold mb-3">Pickup Details</h3>

              <label className="text-sm font-semibold block mb-1">
                Assigned Zones
              </label>

              <div className="mt-2 rounded-lg overflow-hidden shadow-2xl">
                <MapContainer
                  style={{ height: '15rem', width: '100%' }}
                  center={[18.510066, 73.856738]}
                  zoom={13}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[18.510066, 73.856738]}>
                    <Popup>Swargate</Popup>
                  </Marker>
                  <Marker position={[18.472110, 73.901710]}>
                    <Popup>Kondhwa</Popup>
                  </Marker>
                </MapContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Daily Pickup Capacity
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    defaultValue="50 Kg"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Shift Timing
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    defaultValue="10:30 A.M - 5:30 P.M"
                  />
                </div>
              </div>

              <a
                href="#"
                className="text-xs text-green-700 mt-2 inline-block underline"
              >
                Change Pickup Details?
              </a>
            </div>

            {/* Preferences */}
            <div className="mt-10">
              <h3 className="text-lg font-bold mb-3">Preferences</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Notification Preference
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Value</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold block mb-1">
                    Dark/Light Mode
                  </label>
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
    </div>
  );
};

export default ProfilePageLogistic;
