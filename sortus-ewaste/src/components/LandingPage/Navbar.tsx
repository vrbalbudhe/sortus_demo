import React, { useContext, useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../hooks/AuthContext";
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

const LogoSection = () => {
  return (
    <>
      <div className="flex cursor-pointer items-center space-x-3 select-none">
        <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center">
          <img src="./SortUsLogo-removebg-preview.png" alt="" />
        </div>
        <span className="text-xl font-semibold text-white bg-clip-text text-transparent">
          SortUs
        </span>
      </div>
    </>
  );
};

const NavigationTray = () => {
  const activeClass =
    "text-emerald-800 font-semibold border-b-2 border-emerald-500 pb-1";
  const baseClass =
    "text-gray-900 hover:text-emerald-600 cursor-pointer transition-all duration-300 hover:scale-105 font-medium";

  return (
    <>
      <nav className="hidden select-none md:flex items-center space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          Home
        </NavLink>

        <NavLink
          to="/how-it-works"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          How It Works
        </NavLink>

        <NavLink
          to="/price-list"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          Price List
        </NavLink>

        <NavLink
          to="/pickup"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          Pickup
        </NavLink>

        <NavLink
          to="/eco-store"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          Eco-Store
        </NavLink>
      </nav>
    </>
  );
};

const SignedLoginButton = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<{ general?: string }>({});
  const { setUser, setLoading } = useContext(AuthContext) as AuthContextType;

  const HandleLogout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:8000/api/auth/logout`,
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        setUser(null);
        window.location.reload();
      }
    } catch (error) {
      setErrors({ general: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleProfileClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleProfileClick}
        className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-2 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
      >
        <svg
          className="w-5 h-5"
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
      </button>
      <button onClick={HandleLogout}>
        <p className="text-slate-600 text-sm">Logout</p>
      </button>
    </div>
  );
};

const UnsignedLoginButton = () => {
  return (
    <div className="flex items-center space-x-3 select-none">
      <Link
        to="/signup"
        className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-300 px-4 py-2 rounded-full bg-emerald-50"
      >
        Register
      </Link>
      <Link
        to="/login"
        className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-medium"
      >
        Login
      </Link>
    </div>
  );
};

const Navbar: React.FC = () => {
  const { user } = useContext(AuthContext) as AuthContextType;

  return (
    <header className="bg-gray-100 sticky top-0 z-50">
      <div className="max-w-full min-h-16 mx-auto px-2 pb-2 pt-5 sm:px-6 lg:px-8">
        <div className="bg-emerald-300 rounded-full pl-5 pr-5 flex justify-between items-center h-16">
          <LogoSection />
          <NavigationTray />
          {user ? <SignedLoginButton /> : <UnsignedLoginButton />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
