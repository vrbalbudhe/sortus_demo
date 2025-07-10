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
    <div className="w-1/2 flex items-start justify-center p-6 bg-transparent">
      <div
        className="w-[692px] h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 flex items-center justify-center shadow-2xl duration-700"
        style={{
          borderRadius: "60px",
          clipPath: "polygon(0% 0%, 98% 0%, 90% 100%, 0% 100%)",
        }}
      >
        <img
          src="./images/Left-Login.png"
          alt="Recycling"
          className="w-[80%] h-auto drop-shadow-lg"
        />
      </div>
    </div>
  );
};

const RightPanel = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ general?: string }>({});
  const { user, setUser, loading, setLoading, refreshLoginContext } =
    useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setErrors({});
      setLoading(true);
      const response = await axios.post(
        `http://localhost:8000/api/auth/login`,
        { email, password },
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
    <div className="w-1/2 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-transparent flex items-center justify-center mb-4">
            <img
              src="./SortUsLogo-removebg-preview.png"
              alt="SortUs Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Login to your SortUs account
          </p>
        </div>

        <form onSubmit={handleLogin} className="p-8 ">
          <div className="space-y-5">
            <div className="relative">
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 px-6 rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg"
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
              className="text-emerald-600 font-semibold hover:text-emerald-700 hover:underline transition-colors duration-300"
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
        className="absolute bottom-0 left-0 w-full min-h-[100px] opacity-30"
        style={{
          backgroundImage: "url('./images/tree.png')",
          backgroundPosition: "bottom",
          backgroundSize: "auto 100%",
        }}
      />
      <div className="w-full flex relative min-h-screen">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}
