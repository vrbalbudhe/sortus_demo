import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
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

const LogoSection = () => (
  <div className="flex cursor-pointer items-center space-x-3 select-none">
    <div className="w-16 h-16 bg-transparent rounded-xl flex items-center justify-center">
      <img
        src="./SortUsLogo-removebg-preview.png"
        alt="logo"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
);

const NavigationTray = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext) as AuthContextType;
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const howItWorks = document.getElementById("how-it-works");
      if (!howItWorks) return;

      const rect = howItWorks.getBoundingClientRect();
      if (rect.top >= -200 && rect.top <= window.innerHeight / 2) {
        setActiveSection("how-it-works");
      } else {
        setActiveSection("");
      }
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const activeClass =
    "text-emerald-800 font-semibold border-b-2 border-green-500 pb-0.5";
  const baseClass =
    "text-gray-900 hover:text-green-600 cursor-pointer transition-all duration-300 hover:scale-105 font-medium";

  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handlePickupClick = () => {
    if (user) {
      navigate("/pickup");
    } else {
      navigate("/login?redirect=/pickup");
    }
  };

  return (
    <nav className="hidden select-none md:flex items-center space-x-8">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Home
      </NavLink>

      {location.pathname === "/" ? (
        <button
          className={`${baseClass} ${
            activeSection === "how-it-works" ? activeClass : ""
          }`}
          onClick={scrollToHowItWorks}
        >
          How It Works
        </button>
      ) : (
        <NavLink
          to="/#how-it-works"
          className={({ isActive }) => (isActive ? activeClass : baseClass)}
        >
          How It Works
        </NavLink>
      )}

      <NavLink
        to="/price-list"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Price List
      </NavLink>

      <button
        onClick={handlePickupClick}
        className={`${baseClass} ${
          location.pathname === "/pickup" ? activeClass : ""
        }`}
      >
        Pickup
      </button>

      <NavLink
        to="/eco-store"
        className={({ isActive }) => (isActive ? activeClass : baseClass)}
      >
        Eco-Store
      </NavLink>
    </nav>
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
        `${process.env.REACT_APP_API_URL}/api/auth/logout`,
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

const UnsignedLoginButton = () => (
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

const Navbar: React.FC = () => {
  const { user } = useContext(AuthContext) as AuthContextType;

  return (
    <header className="bg-gray-100 sticky top-0 z-50">
      <div className="max-w-full min-h-16 mx-auto px-2 pb-2 pt-5 sm:px-6 lg:px-8">
        <div className="bg-[#CAE4CA] rounded-full pl-5 pr-5 flex justify-between items-center h-16">
          <LogoSection />
          <NavigationTray />
          {user ? <SignedLoginButton /> : <UnsignedLoginButton />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
