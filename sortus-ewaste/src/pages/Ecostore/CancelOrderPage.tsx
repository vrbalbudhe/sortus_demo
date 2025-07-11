import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CancelOrderPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [otherReasonText, setOtherReasonText] = useState<string>("");

  const handleCancelOrder = () => {
    if (!selectedReason || (selectedReason === "other" && !otherReasonText.trim())) {
      alert("Please select or enter a reason for cancellation.");
      return;
    }

    alert("Order has been cancelled.");
    navigate("/eco-store");
  };

  return (
    <div className="relative min-h-screen font-sans overflow-hidden bg-[#EDF4ED]">
      {/* Bottom Tree Border */}
      <div
        className="absolute bottom-0 left-0 w-full h-[95px] z-0 bg-repeat-x"
        style={{
          backgroundImage: "url('/illustrations/trees.svg')",
          backgroundPosition: "bottom",
          backgroundSize: "auto 100%",
        }}
      />

      <div className="flex flex-col md:flex-row min-h-screen relative z-10">
        {/* LEFT PANEL */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-4 pt-4 pb-6 md:p-4 relative">
          <div className="relative w-full flex items-center justify-center">
            {/* Back Button inside SVG block */}
            <button
              onClick={() => navigate("/eco-store")}
              className="absolute top-6 right-10 text-sm px-4 py-2 bg-white rounded-full border shadow hover:bg-gray-100 z-10"
            >
              ← Back to Dashboard
            </button>

            <object
              type="image/svg+xml"
              data="/illustrations/machine2.svg"
              className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] h-auto"
              aria-label="Cancel Order Illustration"
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-lg">
            <div className="flex flex-col items-center mb-6">
              <img src="/images/SortUsLogo.png" alt="SortUs Logo" className="h-24 mb-4" />
              <h1 className="text-2xl font-bold text-black">Cancel Order</h1>
            </div>

            {/* Green Box */}
            <div className="bg-[#CAE4CA] rounded-xl p-8 shadow-md border w-full mb-6">
              {/* Order Info */}
              <div className="mb-6">
                <h2 className="font-bold mb-2">Order Summary</h2>
                <div className="space-y-1 text-sm">
                  <p>Pickup ID: #XXXXX</p>
                  <p>Scheduled: 21 January, 2025</p>
                  <p>Location: Swargate, Pune</p>
                  <p>Ordered Items: Eco-Friendly Office Set</p>
                </div>
              </div>

              {/* Reason for Cancellation */}
              <div>
                <h2 className="font-bold mb-2">Reason for Cancellation</h2>
                <div className="space-y-3 text-sm">
                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="reason"
                      className="h-4 w-4"
                      checked={selectedReason === "changed_my_mind"}
                      onChange={() => {
                        setSelectedReason("changed_my_mind");
                        setOtherReasonText("");
                      }}
                    />
                    <span>Changed my mind</span>
                  </label>

                  <label className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="reason"
                      className="h-4 w-4"
                      checked={selectedReason === "other"}
                      onChange={() => setSelectedReason("other")}
                    />
                    <span>Other</span>
                  </label>

                  {selectedReason === "other" && (
                    <textarea
                      placeholder="Enter your reason..."
                      value={otherReasonText}
                      onChange={(e) => setOtherReasonText(e.target.value)}
                      className="w-full border rounded px-3 py-2 mt-2 text-sm focus:outline-none"
                      rows={3}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                className="flex-1 border border-red-500 text-red-500 bg-transparent py-3 px-4 rounded hover:bg-red-100 transition font-medium"
                onClick={handleCancelOrder}
              >
                CANCEL ORDER
              </button>
              <button
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded hover:bg-green-700 transition font-medium"
                onClick={() => navigate("/reschedule-order")}
              >
                RESCHEDULE INSTEAD
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrderPage;