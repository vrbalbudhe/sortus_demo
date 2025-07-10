import React, { useState } from 'react';

const Step2 = ({ nextStep, prevStep, updateFormData }: any) => {
  const [role, setRole] = useState('');

  const handleContinue = () => {
    if (role) {
      updateFormData({ role });
      nextStep();
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <select
        className="border p-2 rounded w-72"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">Select Role</option>
        <option value="individual">Individual</option>
        <option value="industry">Industry</option>
        <option value="institute">Institute</option>
        <option value="logistic">Logistic</option>
        <option value="admin">Admin</option>
      </select>
      <div className="flex gap-4">
        <button onClick={prevStep} className="border py-2 px-4 rounded">Back</button>
        <button onClick={handleContinue} className="bg-green-800 text-white py-2 px-4 rounded">Continue</button>
      </div>
    </div>
  );
};

export default Step2;
