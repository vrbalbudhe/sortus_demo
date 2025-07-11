import React, { useState } from "react";
import { createPortal } from "react-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import PickupConfirmed from "../Pickup/PickupConfirm"; 

const PickupRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    location: "",
    itemType: "",
    condition: "",
    quantity: "",
    weight: "",
    description: "",
    agree: false,
  });

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const isChecked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: isChecked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      ...formData,
      date: selectedDate?.format("YYYY-MM-DD HH:mm") || "",
    };
    console.log(data);
    setShowPopup(true);
  };

  const quantity = parseInt(formData.quantity) || 0;
  const quantityBonus = quantity > 0 ? quantity * 5 : 0;
  const frequencyBonus = 20;
  const greenPoints = 50 + quantityBonus + frequencyBonus;
  const cashValue = 25 + quantityBonus + frequencyBonus;

  return (
    <div className="relative min-h-screen w-full bg-[#e6f4ea] font-sans pb-20 overflow-x-hidden">
      {/* Background Decorations */}
      <img
        src="/images/finaltrees1.png"
        alt="Tree Set 2"
        className="absolute opacity-20 hidden md:block"
        style={{ left: "7%", bottom: "0%", width: "550px" }}
      />
      <img
        src="/images/tree.png"
        alt="Tree Set 3"
        className="absolute opacity-20 hidden md:block"
        style={{ left: "-10%", bottom: "0%", width: "250px" }}
      />
      <img
        src="/images/finalwindmill.png"
        alt="Windmill"
        className="absolute opacity-30 hidden md:block"
        style={{
          left: "2%",
          top: "20%",
          width: "120px",
          transform: "rotate(10deg)",
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 px-4 md:px-8 lg:px-12 pt-16">
        {/* Form Panel */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-[800px] mx-auto p-6 md:p-8"
        >
          <h2 className="text-xl font-semibold text-gray-800">
            Pickup Request
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Fill in your details for scheduling the pickup
          </p>

          {/* Text fields */}
          {[
            { name: "fullName", label: "Full Name", type: "text" },
            { name: "quantity", label: "Quantity", type: "text" },
            { name: "description", label: "Description - Optional", type: "text" },
          ].map(({ name, label, type }) => (
            <div className="mb-4" key={name}>
              <label htmlFor={name} className="block text-sm font-medium">
                {label}
              </label>
              <input
                id={name}
                name={name}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                placeholder="Value"
                type={type}
              />
            </div>
          ))}

          {/* Dropdown fields */}
          {[
            { name: "location", label: "Location", options: ["Mumbai", "Pune"] },
            { name: "itemType", label: "Item Type", options: ["Plastic", "E-Waste"] },
            { name: "weight", label: "Weight", options: ["1 kg", "5 kg", "10 kg"] },
          ].map(({ name, label, options }) => (
            <div className="mb-4" key={name}>
              <label htmlFor={name} className="block text-sm font-medium">
                {label}
              </label>
              <select
                id={name}
                name={name}
                value={(formData as any)[name]}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded px-3 py-2"
                required
              >
                <option value="">Value</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* Radio buttons */}
          <fieldset className="mb-4">
            <legend className="text-sm font-medium mb-2">Condition</legend>
            {[
              { value: "working", label: "Device is fully functional" },
              { value: "dead", label: "The waste is not working and cannot be repaired" },
            ].map((opt) => (
              <label className="flex gap-2 mb-2" key={opt.value}>
                <input
                  type="radio"
                  name="condition"
                  value={opt.value}
                  onChange={handleChange}
                />
                <span>
                  <strong>
                    {opt.value[0].toUpperCase() + opt.value.slice(1)}
                  </strong>
                  <div className="text-xs text-gray-400">{opt.label}</div>
                </span>
              </label>
            ))}
          </fieldset>

          {/* Image upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Image Upload</label>
            <label className="flex justify-center items-center h-28 bg-gray-100 border-2 border-dashed rounded cursor-pointer">
              <img
                src="https://cdn-icons-png.freepik.com/256/15484/15484654.png?semt=ais_hybrid"
                alt="upload"
                className="w-10 h-10"
              />
              <input type="file" name="imageUpload" className="hidden" />
            </label>
            <p className="text-center text-xs text-gray-400 mt-1">or drag and drop</p>
          </div>

          {/* Date Picker */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Select Time</label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}
                format="MM/DD/YYYY hh:mm A"
                slotProps={{
                  textField: { fullWidth: true, variant: "outlined" },
                }}
              />
            </LocalizationProvider>
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-2 text-sm font-medium mb-4">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1"
              required
            />
            <span>
              I accept the terms
              <a href="#" className="text-green-600 underline ml-1">
                Read our T&Cs
              </a>
            </span>
          </label>

          {/* Buttons */}
          <button
            type="submit"
            className="w-full bg-[#5ba150] text-white py-2 rounded hover:bg-[#4a8943] transition"
          >
            Proceed
          </button>

          <button
            type="button"
            className="w-full mt-2 border border-gray-400 py-2 rounded text-sm"
          >
            Add More Items?
          </button>
        </form>

        {/* RIGHT PANEL */}
        <div className="flex flex-col items-center gap-8 w-full max-w-[400px] mx-auto">
          {/* IMAGE + NOTE */}
          <div className="relative w-60 h-auto mb-4">
            <img
              src="/images/note.png"
              alt="Note"
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-52"
            />
            <img
              src="/images/pickupgirl.png"
              alt="Girl Holding Earth"
              className="w-full h-auto object-contain relative z-10"
            />
          </div>

          {/* Points Calculator */}
          <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-full">
            <h2 className="text-2xl font-bold text-center mb-2">
              Points Calculator
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <img
                src="/images/green-icon.png"
                alt="green"
                className="w-10 h-10"
              />
              <span className="text-green-600 text-4xl font-bold">
                {greenPoints}
              </span>
            </div>
            <p className="text-center text-base font-medium text-gray-700 mb-4">
              Estimated Green Points
            </p>
            <div className="text-sm text-black px-4 space-y-2">
              <div className="flex justify-between">
                <span>Base points:</span>
                <span>50</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity bonus:</span>
                <span>+{quantityBonus}</span>
              </div>
              <div className="flex justify-between">
                <span>Frequency bonus:</span>
                <span>+{frequencyBonus}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>{greenPoints}</span>
              </div>
            </div>
          </div>

          {/* Cash Calculator */}
          <div className="bg-white rounded-xl shadow-lg px-6 py-4 w-full">
            <h2 className="text-2xl font-bold text-center mb-2">
              Cash Calculator
            </h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <img
                src="/images/orange-icon.png"
                alt="cash"
                className="w-10 h-10"
              />
              <span className="text-orange-500 text-4xl font-bold">
                {cashValue}
              </span>
            </div>
            <p className="text-center text-base font-medium text-gray-700 mb-4">
              Estimated Cash
            </p>
            <div className="text-sm text-black px-4 space-y-2">
              <div className="flex justify-between">
                <span>Base reward:</span>
                <span>25</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity bonus:</span>
                <span>+{quantityBonus}</span>
              </div>
              <div className="flex justify-between">
                <span>Frequency bonus:</span>
                <span>+{frequencyBonus}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>{cashValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL POPUP */}
      {showPopup &&
        createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white w-[90%] max-w-xl rounded-2xl shadow-xl p-6 relative">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-black"
              >
                ×
              </button>
              <PickupConfirmed />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default PickupRequestForm;
