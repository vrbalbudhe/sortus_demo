import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";
import axios from "axios";

interface User {
  userId?: string;
  email?: string;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
  setLoading: (loading: boolean) => void;
  loading: boolean;
  refreshLoginContext: () => Promise<void>;
}

const LeftPanel = () => {
  return (
    <div className="hidden md:flex md:w-1/2 items-center justify-center">
      <div className="w-full h-full flex items-start justify-start px-6 pt-10 pb-10">
        <object
          type="image/svg+xml"
          data="/illustrations/machine.svg"
          className="w-full max-w-[750px] h-auto"
          aria-label="Machine Illustration"
        />
      </div>
    </div>
  );
};

const RightPanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ general?: string }>({});
  const { setUser, setLoading, refreshLoginContext } = useContext(
    AuthContext
  ) as AuthContextType;
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setErrors({});
      setLoading(true);
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      if (response?.data?.data?.user) {
        await refreshLoginContext();
        setUser(response.data.data.user);
        navigate("/");
      } else {
        setErrors({
          general: response?.data?.data?.message || "Login failed",
        });
      }
    } catch (error) {
      setErrors({ general: "An unexpected error occurred." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-28 h-28 flex items-center justify-center mb-4 -ml-8">
            <object
              type="image/svg+xml"
              data="/illustrations/SortusLogo.svg"
              className="w-28 h-28"
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

        <form onSubmit={handleLogin} className="p-0">
          <div className="space-y-5">
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 font-medium placeholder-gray-400"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 font-medium placeholder-gray-400"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>

            {errors.general && (
              <p className="text-red-500 text-sm">{errors.general}</p>
            )}

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded hover:bg-green-700 transition-all duration-300 font-semibold text-lg"
            >
              Login
            </button>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm font-medium">
              or
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <button
            type="button"
            className="w-full border-2 border-gray-200 bg-white flex items-center justify-center py-4 px-6 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              className="w-5 h-5 mr-3"
            />
            <span className="font-semibold text-gray-700">
              Sign in with Google
            </span>
          </button>

          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-green-600 font-semibold hover:underline transition-colors duration-300"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default function Login() {
  return (
    <div className="w-full relative overflow-hidden min-h-screen bg-[#EDF4ED]">
      <div
        className="absolute bottom-0 left-0 w-full h-[100px] bg-repeat-x z-10 pointer-events-none"
        style={{
          backgroundImage: "url('/illustrations/trees.svg')",
          backgroundSize: "auto 100%",
          backgroundPosition: "bottom left",
        }}
      ></div>
      <div className="flex flex-col md:flex-row w-full relative min-h-screen z-10">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}
