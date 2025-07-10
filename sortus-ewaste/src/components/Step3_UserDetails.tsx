import React, { useState } from 'react';

const Step3 = ({ prevStep, updateFormData, submitForm, role }: any) => {
  const [formValues, setFormValues] = useState<any>({
    dob: '',
    age: '',
    location: '',
    gst_no: '',
    establishment_date: '',
    operation_range_km: '',
    vehicle_details: '',
    id_proof: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'id_proof') {
      const file = files?.[0];
      if (file && !/\.(pdf|jpg|jpeg|png)$/i.test(file.name)) {
        alert('Invalid file type. Only PDF, JPG, JPEG, PNG allowed.');
        return;
      }
      setFormValues((prev: any) => ({ ...prev, [name]: file || null }));
    } else {
      setFormValues((prev: any) => ({ ...prev, [name]: value }));
    }
  };

  const isValidDate = (dateStr: string) => {
    const today = new Date();
    const inputDate = new Date(dateStr);
    return inputDate <= today;
  };

  const isNumeric = (val: string) => /^\d+$/.test(val);

  const validateFields = () => {
    const {
      dob,
      age,
      location,
      gst_no,
      establishment_date,
      operation_range_km,
      vehicle_details,
      id_proof,
    } = formValues;

    if (role === 'individual') {
      if (!dob || !age) return 'Please enter Date of Birth and Age.';
      if (!isValidDate(dob)) return 'Date of Birth cannot be in the future.';
      if (!isNumeric(age) || Number(age) <= 0 || Number(age) > 120) return 'Enter a valid numeric Age.';
    }

    if (role === 'logistic') {
      if (!dob || !age || !vehicle_details || !operation_range_km || !id_proof)
        return 'Please fill all required logistic fields including ID proof.';
      if (!isValidDate(dob)) return 'Date of Birth cannot be in the future.';
      if (!isNumeric(age) || Number(age) <= 0 || Number(age) > 120) return 'Enter a valid numeric Age.';
      if (!isNumeric(operation_range_km)) return 'Operation range must be numeric.';
    }

    if (role === 'industry' || role === 'institute') {
      if (!establishment_date || !location || !gst_no || !id_proof)
        return 'Please fill all required fields including GST and ID proof.';
      if (!isValidDate(establishment_date)) return 'Establishment date cannot be in the future.';
      if (!/^[0-9A-Z]{15}$/i.test(gst_no)) return 'Enter a valid 15-character GST number.';
    }

    return null; 
  };

  const handleContinue = () => {
    const errorMsg = validateFields();
    if (errorMsg) {
      alert(errorMsg);
      return;
    }

    // If all good
    updateFormData(formValues);
    submitForm();
  };

  return (
    <div className="flex flex-col space-y-4 w-72">
      {(role === 'individual' || role === 'logistic') && (
        <>
          <label className="text-sm font-medium text-gray-700">Date of Birth</label>
          <input
            name="dob"
            type="date"
            value={formValues.dob}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="age"
            placeholder="Age"
            value={formValues.age}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </>
      )}

      {role === 'logistic' && (
        <>
          <input
            name="vehicle_details"
            placeholder="Vehicle Details"
            value={formValues.vehicle_details}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="operation_range_km"
            placeholder="Operation Range (in km)"
            value={formValues.operation_range_km}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <label className="text-sm font-medium text-gray-700">Upload ID Proof</label>
          <input
            type="file"
            name="id_proof"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </>
      )}

      {(role === 'industry' || role === 'institute') && (
        <>
          <label className="text-sm font-medium text-gray-700">Date of Establishment</label>
          <input
            name="establishment_date"
            type="date"
            value={formValues.establishment_date}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="location"
            placeholder="Location"
            value={formValues.location}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="gst_no"
            placeholder="GST Number (15 characters)"
            value={formValues.gst_no}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <label className="text-sm font-medium text-gray-700">Upload ID Proof</label>
          <input
            type="file"
            name="id_proof"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </>
      )}

      <div className="flex gap-4 mt-4">
        <button onClick={prevStep} className="border py-2 px-4 rounded">Back</button>
        <button onClick={handleContinue} className="bg-green-800 text-white py-2 px-4 rounded">Submit</button>
      </div>
    </div>
  );
};

export default Step3;
