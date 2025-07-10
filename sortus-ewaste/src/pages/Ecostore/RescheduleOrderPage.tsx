import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const timeSlots = [
  "10:00 A.M. - 12:00 P.M.",
  "12:00 P.M. - 2:00 P.M.",
  "2:00 P.M. - 4:00 P.M.",
  "4:00 P.M. - 6:00 P.M.",
];

const RescheduleOrderPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const handleReschedule = () => {
    if (!selectedDate || !selectedSlot) {
      alert("Please select both a date and a time slot.");
      return;
    }
    alert(`Your order has been rescheduled to ${selectedDate} (${selectedSlot}).`);
    navigate("/eco-store");
  };

  return (
    <div className="relative min-h-screen font-sans overflow-hidden bg-[#EDF4ED]">
      {/* Tree border at the bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[95px] z-0 bg-repeat-x"
        style={{
          backgroundImage: "url('./images/tree.png')",
          backgroundPosition: "bottom",
          backgroundSize: "auto 100%",
        }}
      />

      <div className="flex min-h-screen relative z-10">
        {/* LEFT PANEL */}
        <div className="w-1/2 flex items-center justify-center relative p-6">
          <div
            className="w-[692px] h-[979px] bg-[#C8C8C8] flex items-center justify-center shadow-lg relative"
            style={{
              borderRadius: "60px",
              clipPath: "polygon(0% 0%, 98% 0%, 90% 100%, 0% 100%)",
            }}
          >
            <button
              className="absolute top-6 right-10 text-green-700 bg-white px-4 py-2 rounded-full shadow flex items-center gap-2 text-sm font-semibold"
              onClick={() => navigate("/eco-store")}
            >
              <span className="text-xl">←</span>
              <span>Back to Dashboard</span>
            </button>

            <img
              src="./images/Left-Signup.png"
              alt="Recycling Graphic"
              className="w-[80%] h-auto object-contain"
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-1/2 flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-lg">
            <div className="flex flex-col items-center mb-6">
              <img src="./images/SortUsLogo.png" alt="SortUs Logo" className="h-24 mb-4" />
              <h1 className="text-2xl font-bold text-black">Reschedule Order</h1>
            </div>

            {/* Green Box */}
            <div className="bg-[#CAE4CA] rounded-2xl p-8 shadow-md border w-full">
              {/* Order Info + Alert */}
              <div className="flex gap-6 mb-6">
                {/* Order Information */}
                <div className="w-2/3">
                  <h2 className="font-bold mb-2">Order ID: #XXXXXX</h2>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Original Date:</span> January 5, 2025, 4:00 P.M.</p>
                    <p><span className="font-medium">Location:</span> Sector 6, Sinhagad</p>
                    <p><span className="font-medium">Items:</span> Eco-Friendly Office Set</p>
                    <p><span className="font-medium">Status:</span> Shipped</p>
                  </div>
                </div>

                {/* Alert Box */}
                <div
                  className="w-1/3 bg-[#1B4D3E] text-white rounded-[30px] p-4 flex items-start gap-3"
                  style={{ minWidth: "239px", minHeight: "182px" }}
                >
                  <span className="text-yellow-400 mr-2 text-2xl mt-1">⚠</span>
                  <div className="text-sm mt-1">
                    <p>Please make sure someone is available at the time slot.</p>
                    <p className="mt-2">Changes can only be made once.</p>
                  </div>
                </div>
              </div>

              {/* Date and Time Slot Selection */}
              <div className="mb-6">
                <h2 className="font-bold mb-2">Select New Time Slot</h2>

                <div className="mb-4">
                  <label className="block font-medium mb-2">DATE</label>
                  <input
                    type="date"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none mb-4"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div className="space-y-3">
                  {timeSlots.map((slot) => (
                    <label key={slot} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="time-slot"
                        className="h-4 w-4"
                        checked={selectedSlot === slot}
                        onChange={() => setSelectedSlot(slot)}
                      />
                      <span>{slot}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-row gap-6 mt-6">
                <button
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition font-medium"
                  onClick={handleReschedule}
                >
                  CONFIRM RESCHEDULE
                </button>
                <button
                  className="flex-1 border border-red-500 text-red-500 py-2 px-4 rounded hover:bg-red-100 transition font-medium"
                  onClick={() => navigate("/eco-store")}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescheduleOrderPage;
