import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";
import Navbar from "../components/LandingPage/Navbar";
import Footer from "../components/LandingPage/Footer";

export const ProtectedLayout = () => {
  const authContext = useContext(AuthContext);
  const user = authContext?.user;

  if (!user) return <Navigate to="/" />;

  return (
    <div className="min-h-screen w-full flex bg-gray-100">
      <div className=" w-full flex flex-col">
        <div className="sticky top-0 z-40 w-full">
          <Navbar />
        </div>
        <div className="w-[100%] flex justify-center items-center min-h-screen">
          <div className="w-[95%] flex flex-col">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
