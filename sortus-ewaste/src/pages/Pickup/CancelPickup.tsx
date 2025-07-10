import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CancelPickup: React.FC = () => {
  const [reason, setReason] = useState('');
  const [customReason, setCustomReason] = useState('');
  const navigate = useNavigate();

  const handleCancel = () => {
    const finalReason = reason === 'Other' ? customReason.trim() : reason;

    if (!finalReason) {
      alert('Please select or enter a reason.');
      return;
    }

    alert(`Pickup cancelled for reason: ${finalReason}`);
    navigate('/pickup');
  };

  const handleReschedule = () => {
    navigate('/pickup/reschedule');
  };

  return (
    <div className="relative min-h-screen font-sans overflow-hidden bg-white">
      {/* Bottom Tree Border */}
      <div
        className="absolute bottom-0 left-0 w-full h-[95px] z-0 bg-repeat-x"
        style={{
          backgroundImage: "url('/images/tree.png')",
          backgroundPosition: 'bottom',
          backgroundSize: 'auto 100%',
        }}
      />

      <div className="flex min-h-screen relative z-10">
        {/* Left Panel */}
        <div className="w-1/2 flex items-center justify-center">
          <div
            className="w-[692px] h-[920px] bg-[#C8C8C8] flex flex-col items-center justify-center shadow-lg p-6 relative"
            style={{
              borderRadius: '60px',
              clipPath: 'polygon(0% 0%, 98% 0%, 90% 100%, 0% 100%)',
            }}
          >
            <button
              onClick={() => navigate('/pickup')}
              className="absolute top-6 right-6 text-sm px-4 py-2 bg-white rounded-full border shadow hover:bg-gray-100"
            >
              ← Back to Dashboard
            </button>

            <img
              src="/images/Left-Signup.png"
              alt="Recycling Graphic"
              className="w-[80%] h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-1/2 flex flex-col items-center justify-center px-10 py-10">
          {/* Logo and Title */}
          <div className="text-center mb-4">
            <img src="/images/SortUsLogo.png" alt="SortUs Logo" className="h-28 mx-auto mb-2" />
            <h2 className="text-2xl font-bold text-green-900">Cancel Pickup</h2>
          </div>

          {/* Form Box */}
          <div className="w-full max-w-[740px] bg-[#E6F5E9] p-10 rounded-xl shadow-lg">
            {/* Summary and Warning */}
            <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
              <div className="flex-1 min-w-[280px] bg-[#DCF3E2] p-4 rounded-xl text-sm text-gray-800">
                <h2 className="font-bold text-black mb-2">Pickup Summary</h2>
                <p><strong>Pickup ID:</strong> #XXXXX</p>
                <p><strong>Scheduled:</strong> 21 January, 2025</p>
                <p><strong>Location:</strong> Swargate, Pune</p>
                <p><strong>Item Category:</strong> Fridge, Laptop</p>
              </div>

              <div
                className="text-white text-sm flex items-center justify-center text-center"
                style={{
                  width: '240px',
                  height: '142px',
                  background: '#081F08',
                  borderRadius: '20px',
                  padding: '20px',
                }}
              >
                <span className="text-yellow-400 mr-2 text-xl">⚠</span>
                Frequent Cancellations may reduce your eligibility for pickups.
              </div>
            </div>

            {/* Reason Section */}
            <div className="text-sm text-gray-700">
              <h3 className="font-bold text-lg mb-2 text-green-900">Reason for Cancellation</h3>
              <div className="space-y-2 mb-4">
                {[
                  'Changed my mind',
                  'Not available at the scheduled time',
                  'Other',
                ].map((option) => (
                  <label className="flex items-center gap-2" key={option}>
                    <input
                      type="radio"
                      name="reason"
                      value={option}
                      checked={reason === option}
                      onChange={() => {
                        setReason(option);
                        if (option !== 'Other') setCustomReason('');
                      }}
                    />
                    {option}
                  </label>
                ))}

                {reason === 'Other' && (
                  <input
                    type="text"
                    value={customReason}
                    onChange={(e) => setCustomReason(e.target.value)}
                    className="w-full border p-2 rounded focus:outline-none"
                    placeholder="Enter custom reason"
                  />
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={handleCancel}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 text-sm font-semibold"
                >
                  CANCEL PICKUP
                </button>
                <button
                  onClick={handleReschedule}
                  className="border border-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 text-sm font-semibold"
                >
                  RESCHEDULE INSTEAD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelPickup;
