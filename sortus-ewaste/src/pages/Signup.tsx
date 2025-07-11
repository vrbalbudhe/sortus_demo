import React, { useContext, useState } from "react";
import Step2 from "../components/Step2_RoleSelection";
import Step3 from "../components/Step3_UserDetails";
import { AuthContext } from "../hooks/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
  setLoading: (loading: boolean) => void;
  loading: boolean;
  refreshLoginContext: () => Promise<void>;
}
interface User {
  userId?: string;
  email?: string;
  [key: string]: any;
}

const Signup: React.FC = () => {
  const [step, setStep] = useState(1);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState({
    firebaseUid: "",
    fullName: "",
    username: "",
    email: "",
    contactNo: "",
    password: "",
    role: "",
    dob: "",
    age: "",
    location: "",
    gst_no: "",
    establishment_date: "",
    government_registration_no: "",
    operation_range_km: "",
    vehicle_details: "",
    id_proof: null as File | null,
  });

  const { setUser, setLoading, refreshLoginContext } = useContext(
    AuthContext
  ) as AuthContextType;
  const [errors, setErrors] = useState<{ general?: string }>({});
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?#&])[A-Za-z\d@$!%?#&]{8,}$/.test(
      password
    );

  const validateContactNo = (contact: string) => /^\d{10}$/.test(contact);

  const handleContinue = () => {
    const { fullName, username, email, contactNo, password } = formData;

    if (!fullName || !username || !email || !contactNo || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validateContactNo(contactNo)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Password must be at least 8 characters and include: 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
      );
      return;
    }

    if (!agreeTerms) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }

    setStep(2);
  };

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const submitForm = async () => {
    try {
      setLoading(true);
      const firebaseUid = formData.fullName + formData.username;
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/register`,
        { ...formData, firebaseUid },
        { withCredentials: true }
      );

      if (response?.data?.data?.user) {
        navigate("/");
        await refreshLoginContext();
        setUser(response?.data?.data?.user);
      } else {
        setErrors({
          general: response?.data?.data?.message || "Signup failed",
        });
      }
    } catch (error) {
      console.error("Signup Error:", error);
      setErrors({
        general: "Signup failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#EDF4ED] font-sans overflow-hidden">
      {/* Signup Layout */}
      <div className="flex flex-col md:flex-row min-h-screen relative z-10">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full flex items-start justify-center">
            <object
              type="image/svg+xml"
              data="/illustrations/machine.svg"
              className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] h-auto"
              aria-label="Signup Illustration"
            />
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center mb-6">
              <div className="w-28 h-28 flex items-center justify-center mb-4 -ml-8">
                <object
                  type="image/svg+xml"
                  data="/illustrations/SortusLogo.svg"
                  className="w-50 h-50"
                  aria-label="SortUs Logo"
                />
              </div>

              <h1 className="text-[28px] sm:text-[32px] font-bold text-black">
                Hi Recycler
              </h1>
              <p className="text-base sm:text-lg text-gray-600 font-medium">
                Welcome to SortUs
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border">
              {step === 1 && (
                <>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="contactNo"
                    placeholder="Contact Number"
                    value={formData.contactNo}
                    onChange={handleChange}
                    className="w-full mb-4 p-2 border rounded"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full mb-2 p-2 border rounded"
                  />
                  <p className="text-xs text-gray-500 mb-3">
                    Must contain at least 8 characters, 1 uppercase, 1
                    lowercase, 1 number, and 1 special character.
                  </p>

                  <div className="flex items-center mb-4 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      id="terms"
                      className="mr-2"
                      checked={agreeTerms}
                      onChange={() => setAgreeTerms(!agreeTerms)}
                    />
                    <label htmlFor="terms">
                      I agree with the{" "}
                      <a href="#" className="text-green-600 font-semibold">
                        Terms & Conditions
                      </a>
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={handleContinue}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                  >
                    Continue
                  </button>

                  <div className="text-center my-4 text-gray-500 text-sm">
                    or
                  </div>

                  <button
                    type="button"
                    className="w-full border flex items-center justify-center py-2 px-4 rounded hover:bg-gray-50"
                  >
                    <img
                      src="https://developers.google.com/identity/images/g-logo.png"
                      alt="Google"
                      className="w-5 h-5 mr-2"
                    />
                    <span className="font-semibold text-sm">
                      Sign Up with Google
                    </span>
                  </button>

                  <p className="text-sm text-center mt-4 text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-green-600 font-medium">
                      Login
                    </a>
                  </p>
                </>
              )}

              {step === 2 && (
                <Step2
                  nextStep={() => setStep(3)}
                  prevStep={() => setStep(1)}
                  updateFormData={updateFormData}
                />
              )}

              {step === 3 && (
                <Step3
                  prevStep={() => setStep(2)}
                  updateFormData={updateFormData}
                  submitForm={submitForm}
                  role={formData.role}
                />
              )}

              {errors.general && (
                <p className="text-red-600 mt-4 text-center text-sm">
                  {errors.general}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tree Background at Bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-[100px] bg-repeat-x bg-bottom z-0"
        style={{
          backgroundImage: "url('/illustrations/trees.svg')",
          backgroundSize: "auto 100%",
        }}
      ></div>
    </div>
  );
};

export default Signup;
