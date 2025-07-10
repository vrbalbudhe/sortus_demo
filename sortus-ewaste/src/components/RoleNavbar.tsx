// src/components/RoleNavbar.tsx
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

export interface RoleNavbarProps {
  role: "individual" | "business"; 
}

const RoleNavbar: React.FC<RoleNavbarProps> = ({ role }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/${role}-profile`);
  };

  const dashboardRoute = `/${role}-dashboard`;
  const orderHistoryRoute = `/${role}-order-history`;
  const priceListRoute = `/${role}-pricelist`;
  const submitEWasteRoute = `/${role}-submit-e-waste`;
  const redeemPointsRoute = `/${role}-redeem-points`;

  const activeClass = "text-primary font-semibold underline";
  const baseClass = "hover:text-primary cursor-pointer transition";

  return (
    <nav className="w-full bg-[#EDF4ED] py-3 shadow-sm font-sans">
      <div className="max-w-[1500px] w-full mx-auto px-8 bg-[#CAE4CA] rounded-sortus-xl flex items-center justify-between shadow-md relative">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 py-3 cursor-pointer"
          onClick={() => navigate(dashboardRoute)}
        >
          <img
            src="/images/SortUsLogo.png"
            alt="SortUs Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="text-xl font-bold text-primary">SortUs</span>
        </div>

        {/* Links */}
        <ul className="flex gap-10 font-medium text-sm text-black">
          <li>
            <NavLink to={dashboardRoute} className={({ isActive }) => isActive ? activeClass : baseClass}>
              DASHBOARD
            </NavLink>
          </li>
          <li>
            <NavLink to={orderHistoryRoute} className={({ isActive }) => isActive ? activeClass : baseClass}>
              ORDER HISTORY
            </NavLink>
          </li>
          <li>
            <NavLink to={priceListRoute} className={({ isActive }) => isActive ? activeClass : baseClass}>
              PRICE LIST
            </NavLink>
          </li>
          <li>
            <NavLink to={submitEWasteRoute} className={({ isActive }) => isActive ? activeClass : baseClass}>
              SUBMIT E WASTE
            </NavLink>
          </li>
          <li>
            <NavLink to={redeemPointsRoute} className={({ isActive }) => isActive ? activeClass : baseClass}>
              REDEEM POINTS
            </NavLink>
          </li>
        </ul>

        {/* Profile */}
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
    </nav>
  );
};

export default RoleNavbar;
