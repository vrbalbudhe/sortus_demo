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

const Signup = () => {
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
    id_proof: null,
  });

  const { user, setUser, loading, setLoading, refreshLoginContext } =
    useContext(AuthContext) as AuthContextType;
  const [errors, setErrors] = useState<{ general?: string }>({});

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
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/.test(
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

  const updateFormData = (data: any) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  const navigate = useNavigate();

  const submitForm = async () => {
    console.log(formData);
    try {
      setLoading(true);
      const firebaseUid = formData.fullName + formData.username;
      const response = await axios.post(
        `http://localhost:8000/api/auth/register`,
        { ...formData, firebaseUid },
        { withCredentials: true }
      );
      if (response?.data?.data?.user) {
        navigate("/");
        await refreshLoginContext();
        setUser(response?.data?.data?.user);
      }
      if (!response?.data?.data?.user) {
        setErrors({
          general: response?.data?.data?.message || "Login failed",
        });
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full relative min-h-screen font-sans overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-full h-[95px] z-0 bg-repeat-x"
        style={{
          backgroundImage: "url('./images/tree.png')",
          backgroundPosition: "bottom",
          backgroundSize: "auto 100%",
        }}
      />

      <div className="flex relative z-10">
        <div className="w-1/2 flex items-start justify-center relative p-6">
          <div
            className="w-[692px] min-h-screen bg-[#C8C8C8] flex items-center justify-center shadow-lg"
            style={{
              borderRadius: "60px",
              clipPath: "polygon(0% 0%, 98% 0%, 90% 100%, 0% 100%)",
            }}
          >
            <img
              src="./images/Left-Signup.png"
              alt="Recycling Graphic"
              className="w-[80%] h-auto object-contain"
            />
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center mb-6">
              <img
                src="./images/SortUsLogo.png"
                alt="SortUs Logo"
                className="h-24 mb-4"
              />
              <h1 className="text-[32px] font-bold text-black">Hi Recycler</h1>
              <p className="text-lg text-gray-600 font-medium">
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
                      <a href="#" className="text-primary font-semibold">
                        Terms & Condition
                      </a>
                    </label>
                  </div>

                  <button
                    type="button"
                    onClick={handleContinue}
                    className="w-full bg-primary text-white py-2 px-4 rounded bg-green-600 hover:bg-green-700"
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
                    <a href="/login" className="text-primary font-medium">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
