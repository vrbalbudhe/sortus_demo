import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReschedulePickupPage() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const navigate = useNavigate();

  const handleReschedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTimeSlot) {
      alert('Please select a date and time slot.');
      return;
    }
    alert('Pickup rescheduled!');
    navigate('/pickup');
  };

  return (
    <div className="relative min-h-screen font-sans bg-[#EDF4ED] overflow-hidden">
      {/* Repeating Tree Background */}
      <div
        className="absolute bottom-0 left-0 w-full h-[95px] bg-repeat-x bg-bottom z-0"
        style={{
          backgroundImage: "url('/illustrations/trees.svg')",
          backgroundSize: "auto 100%",
        }}
      />

      {/* Page Content */}
      <div className="flex flex-col md:flex-row min-h-screen relative z-10">
        {/* LEFT PANEL (SVG) */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 pt-4 pb-6 md:p-4 relative">
          <div className="relative w-full flex items-center justify-center">
            {/* Back to Dashboard Button inside SVG block */}
            <button
              onClick={() => navigate('/pickup')}
              className="absolute top-6 right-10 text-sm px-4 py-2 bg-white rounded-full border shadow hover:bg-gray-100 z-10"
            >
              ← Back to Dashboard
            </button>

            <object
              type="image/svg+xml"
              data="/illustrations/machine2.svg"
              className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] h-auto"
              aria-label="Reschedule Illustration"
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-6 py-10 relative">
          <div className="text-center mb-6">
            <img src="/images/SortUsLogo.png" alt="SortUs Logo" className="h-16 mx-auto mb-2" />
            <h2 className="text-2xl font-bold text-[#1F2937]">Reschedule Pickup</h2>
          </div>

          <div className="w-full max-w-[740px] bg-[#E6F0E4] rounded-xl p-10 shadow-md border relative min-h-[460px]">
            <div className="flex flex-col md:flex-row justify-between gap-10 h-full">
              {/* LEFT FORM SECTION */}
              <div className="flex-1 flex flex-col justify-between text-sm text-[#1F2937]">
                <div className="space-y-3">
                  <p className="text-base font-bold">
                    Pickup ID: <span className="font-semibold text-[#1F2937]">#XXXXXX</span>
                  </p>
                  <p><strong>Original Date:</strong> January 5, 2025, 4:00 P.M.</p>
                  <p><strong>Location:</strong> Sector 6, Sinhagad</p>
                  <p><strong>Items:</strong> Phone, Cables (~3.5 Kg)</p>
                  <p><strong>Status:</strong> Scheduled</p>

                  <form onSubmit={handleReschedule} className="mt-6">
                    <label className="block text-sm font-semibold mb-2">
                      Select new Date
                    </label>
                    <input
                      id="pickup-date"
                      type="date"
                      title="Select new pickup date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full mb-4 p-2 border rounded-md text-sm focus:outline-none"
                    />

                    <label className="block text-sm font-semibold mb-2">
                      Select new Time Slot
                    </label>
                    <div className="space-y-3 text-sm text-gray-700 mb-6">
                      {[
                        '10:00 A.M. - 12:00 P.M.',
                        '12:00 P.M. - 2:00 P.M.',
                        '2:00 P.M. - 4:00 P.M.',
                        '4:00 P.M. - 6:00 P.M.',
                      ].map((slot) => (
                        <label key={slot} className="flex items-center">
                          <input
                            type="radio"
                            name="timeSlot"
                            value={slot}
                            checked={selectedTimeSlot === slot}
                            onChange={(e) => setSelectedTimeSlot(e.target.value)}
                            className="mr-2"
                          />
                          {slot}
                        </label>
                      ))}
                    </div>

                    <div className="flex justify-end items-center gap-4 mt-10">
                      <button
                        type="submit"
                        className="bg-[#2E7D32] text-white px-6 py-2 rounded hover:bg-green-700 transition text-sm font-semibold"
                      >
                        CONFIRM RESCHEDULE
                      </button>
                      <button
                        type="button"
                        onClick={() => navigate('/pickup')}
                        className="px-6 py-2 border border-red-400 rounded text-red-500 hover:bg-red-50 transition text-sm font-semibold"
                      >
                        CANCEL
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* RIGHT WARNING BOX */}
              <div className="w-[240px] h-[200px] bg-[#1D4531] text-white text-sm p-4 rounded-lg shadow-md flex flex-col items-center text-center justify-start">
                <span className="text-yellow-400 text-2xl mb-2">⚠</span>
                <div>
                  <p>Please make sure someone is available at the time slot.</p>
                  <p className="text-gray-300 mt-2 font-bold">
                    Changes can only be made once.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}