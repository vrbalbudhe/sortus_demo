import React from 'react';
import { useParams } from 'react-router-dom';
import RoleNavbar from "../RoleNavbar";

const OrderTrackingPage_Business: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const steps = [
    { label: 'Eco-Friendly Office Set', desc: 'Preparation', done: true },
    { label: 'Initial Scoping', desc: 'Data Checking', done: true },
    { label: 'Arriving status', desc: 'Data Checking', done: false },
    { label: 'Out for Delivery', desc: 'with delivery agent', done: false },
    { label: 'Delivered', desc: 'To You', done: false },
  ];

  return (
    <div className="min-h-screen bg-[#EDF4ED] font-sans">
      <RoleNavbar role="business" />

      <div className="max-w-6xl mx-auto mt-8 p-6">
        <div className="flex justify-between flex-wrap gap-6">
          <div>
            <h1 className="text-5xl font-bold">Welcome User</h1>
            <p className="text-2xl mt-5">“Making a positive impact.”</p>
            <div className="mt-4 flex items-center bg-white px-20 py-2 rounded-full border shadow gap-3">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="orange" strokeWidth="2" />
              </svg>
              <div>
                <p className="font-semibold">2x Points Active</p>
                <p className="text-sm text-gray-500">Next 22h 14m</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="relative w-28 h-30 mx-20">
              <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 36 36">
                <circle className="text-gray-300" stroke="currentColor" strokeWidth="4" fill="none" cx="18" cy="18" r="16" />
                <circle className="text-green-600" stroke="currentColor" strokeWidth="4" strokeDasharray="113" strokeDashoffset="34" fill="none" cx="18" cy="18" r="16" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-orange-500">70%</div>
            </div>
            <p className="text-sm mt-2">
              <span className="font-semibold">occasional user</span><br />
              earn <span className="text-green-700 font-bold">300 points</span> to level up
            </p>
          </div>
        </div>

        <section className="mt-8 bg-white p-6 rounded-2xl shadow border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Order Details</h2>
            <div className="relative">
              <select className="appearance-none bg-gray-100 px-10 py-2 text-sm rounded border">
                <option>Eco store</option>
              </select>
              <svg className="absolute top-3 right-4 w-4 h-4 text-gray-600 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p className="text-sm text-gray-500">Order ID: {orderId || 'N/A'}</p>
        </section>

        <section className="mt-6 bg-white p-6 rounded-2xl shadow border">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <img src="/images/officeset.jpg" alt="Eco-Friendly Office Set" className="w-24 h-24 rounded-lg object-cover" />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">Eco-Friendly Office Set</h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">Points</span>
              </div>
              <div>
                <span className="text-green-900 text-2xl font-bold">150</span>
              </div>
              <p className="text-sm text-gray-500">Arriving tomorrow</p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-48">
              <button className="bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-700">
                Track Order
              </button>
              <button className="bg-white border border-green-600 text-green-700 text-sm font-semibold px-4 py-2 rounded hover:bg-green-50">
                CANCEL ORDER
              </button>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center w-full relative">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.done ? 'bg-green-100 text-green-600 border-green-600' : 'bg-gray-100 text-gray-400 border-gray-300'
                  } border-2`}
                >
                  {i === 0 ? '🚗' : <span className="text-lg">✓</span>}
                </div>
                <p className="mt-2 font-semibold text-center text-sm">{step.label}</p>
                <p className="text-xs text-center text-gray-500">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className={`absolute top-5 left-1/2 h-1 w-full z-[-1] ${step.done ? 'bg-orange-400' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderTrackingPage_Business;
