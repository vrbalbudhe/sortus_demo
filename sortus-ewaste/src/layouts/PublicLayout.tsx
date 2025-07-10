import { Outlet } from "react-router-dom";
import Navbar from "../components/LandingPage/Navbar";
import Footer from "../components/LandingPage/Footer";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-full flex flex-col ">
      <div className="sticky top-0 z-40 w-full">
        <Navbar />
      </div>
      <div className="w-[100%] flex justify-center items-start min-h-screen">
        <Outlet />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};
