import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const NavbarAdmin: React.FC = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const dashboardRoute = "/admin-dashboard";
  const pickupRoute = "/admin-pickup";
  const ecostoreRoute = "/admin-ecostore";
  const reportsRoute = "/admin-reports";
  const profileRoute = "/admin-profile";

  const activeClass = "text-primary font-semibold underline";
  const baseClass = "hover:text-primary cursor-pointer transition";

  const handleProfileClick = () => {
    navigate(profileRoute);
  };

  return (
    <nav className="w-full bg-[#EDF4ED] font-sans overflow-x-hidden">
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 py-3 flex justify-between items-center bg-[#CAE4CA] rounded-sortus-xl shadow-md">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 py-2 cursor-pointer"
          onClick={() => navigate(dashboardRoute)}
        >
          <img
            src="/images/SortUsLogo.png"
            alt="SortUs Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg md:text-xl font-bold text-primary">
            SortUs Admin
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-black font-medium text-sm lg:text-base">
          <NavLink
            to={dashboardRoute}
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            DASHBOARD
          </NavLink>
          <NavLink
            to={pickupRoute}
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            PICKUP
          </NavLink>
          <NavLink
            to={ecostoreRoute}
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            ECOSTORE
          </NavLink>
          <NavLink
            to={reportsRoute}
            className={({ isActive }) => (isActive ? activeClass : baseClass)}
          >
            REPORTS
          </NavLink>

          {/* Profile Icon */}
          <button
            onClick={handleProfileClick}
            className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:scale-105 transition bg-white shadow-md"
            aria-label="Profile"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 21V19C19 17.9 18.1 17 17 17H7C5.9 17 5 17.9 5 19V21M12 11C13.66 11 15 9.66 15 8C15 6.34 13.66 5 12 5C10.34 5 9 6.34 9 8C9 9.66 10.34 11 12 11Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 bg-white rounded-full shadow"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {mobileOpen && (
        <div className="md:hidden w-full bg-[#CAE4CA] rounded-sortus-xl mt-1 px-4 py-4">
          <ul className="flex flex-col gap-4 text-black text-sm font-medium">
            <li>
              <NavLink
                to={dashboardRoute}
                className={({ isActive }) =>
                  isActive ? activeClass : baseClass
                }
                onClick={() => setMobileOpen(false)}
              >
                DASHBOARD
              </NavLink>
            </li>
            <li>
              <NavLink
                to={pickupRoute}
                className={({ isActive }) =>
                  isActive ? activeClass : baseClass
                }
                onClick={() => setMobileOpen(false)}
              >
                PICKUP
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ecostoreRoute}
                className={({ isActive }) =>
                  isActive ? activeClass : baseClass
                }
                onClick={() => setMobileOpen(false)}
              >
                ECOSTORE
              </NavLink>
            </li>
            <li>
              <NavLink
                to={reportsRoute}
                className={({ isActive }) =>
                  isActive ? activeClass : baseClass
                }
                onClick={() => setMobileOpen(false)}
              >
                REPORTS
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  handleProfileClick();
                }}
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 21V19C19 17.9 18.1 17 17 17H7C5.9 17 5 17.9 5 19V21M12 11C13.66 11 15 9.66 15 8C15 6.34 13.66 5 12 5C10.34 5 9 6.34 9 8C9 9.66 10.34 11 12 11Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Profile</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarAdmin;
