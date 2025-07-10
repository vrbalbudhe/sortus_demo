import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoleNavbar from '../RoleNavbar';
import * as IoIcons from 'react-icons/io5';

const IoChevronDown = IoIcons.IoChevronDown as unknown as React.FC<{ className?: string }>;

const OrderHistory_Business: React.FC = () => {
  const navigate = useNavigate();

  const orders = [
    {
      id: 'eco123',
      title: 'Eco-Friendly Office Set',
      points: 150,
      status: 'Arriving tomorrow',
      image: '/images/officeset.jpg',
    },
    {
      id: 'desk456',
      title: 'Desk Organizer',
      points: 100,
      status: 'Delivered on 23 June',
      image: '/images/deskorganizer.png',
    },
  ];

  return (
    <div className="min-h-screen bg-[#EDF4ED] font-sans">
      <RoleNavbar role="business" />

      <main className="px-8 py-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div>
            <h1 className="text-4xl font-bold">Welcome User</h1>
            <p className="mt-5 text-gray-700 font-bold text-sm">“You’re making a positive impact on the environment.”</p>
            <div className="mt-5 bg-white px-10 py-4 rounded-full shadow flex items-center gap-4 border w-fit">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="orange" strokeWidth="2" fill="none" />
              </svg>
              <div>
                <p className="font-semibold text-lg">2x Points Active</p>
                <p className="text-sm text-gray-600">Earn double points in next 22h 14 min</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="relative w-36 h-36 mx-auto">
              <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                <circle className="text-gray-300" stroke="currentColor" strokeWidth="4" fill="none" cx="18" cy="18" r="16" />
                <circle className="text-green-600" stroke="currentColor" strokeWidth="4" strokeDasharray="113" strokeDashoffset="34" fill="none" cx="18" cy="18" r="16" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-orange-500">70%</div>
            </div>
            <p className="text-sm mt-3">
              <span className="font-semibold">occasional user</span><br />
              earn <span className="text-green-700 font-bold">300 points</span> to level up
            </p>
          </div>
        </div>

        <section className="my-10 bg-white p-6 rounded-2xl shadow border">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-xl font-bold">Order History</h2>
              <p className="text-sm text-gray-500">{orders.length} orders</p>
            </div>
            <div className="relative">
              <select className="appearance-none bg-gray-100 px-12 py-3 text-sm rounded border focus:outline-none">
                <option>Eco store</option>
              </select>
              <IoChevronDown className="absolute top-3.5 right-4 text-gray-600 pointer-events-none" />
            </div>
          </div>
        </section>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl p-4 shadow border flex flex-col md:flex-row items-start md:items-center gap-4 hover:shadow-md transition"
            >
              <img src={order.image} alt={order.title} className="w-24 h-24 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{order.title}</h3>
                <div className="flex items-center gap-2 mt-1 mb-1">
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">Points</span>
                  <span className="text-green-900 text-2xl font-bold">{order.points}</span>
                </div>
                <p className="text-sm text-gray-500">{order.status}</p>
              </div>
              <div className="flex flex-col gap-2 w-full md:w-48">
                <button className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700 w-full">
                  TRACK ORDER
                </button>
                <button
                  className="bg-white border border-green-600 text-green-700 text-sm font-semibold px-4 py-2 rounded hover:bg-green-50"
                  onClick={() => navigate(`/track/business/${order.id}`)}
                >
                  VIEW ORDER DETAILS
                </button>
                <button className="bg-white border border-green-600 text-green-700 text-sm font-semibold px-4 py-2 rounded hover:bg-green-50">
                  CANCEL ORDER
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OrderHistory_Business;
