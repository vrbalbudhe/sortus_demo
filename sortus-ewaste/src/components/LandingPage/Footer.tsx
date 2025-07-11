import React from "react";
import * as FaIcons from "react-icons/fa";
import { wrapIcon } from "../../utlis/IconWrapper";

const Footer: React.FC = () => {
  const FaInstagram = wrapIcon(FaIcons.FaInstagram);
  const FaPaperPlane = wrapIcon(FaIcons.FaPaperPlane);

  return (
    <footer className="bg-gray-900 text-white py-10 px-4 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Left 3 sections: Company info */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <img
                src="./SortUsLogo-removebg-preview.png"
                alt="SortUs Logo"
                className="w-10 h-10 bg-white rounded-sm"
              />
              <span className="font-bold text-lg">SortUs</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="mt-1">📍</span>
              <span>Head Office: (City, India)</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="mt-1">📧</span>
              <span>Email: support@sortus.in</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="mt-1">📞</span>
              <span>Phone: +91-XXXX-XXXXXX</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">Company</h4>
            <ul className="space-y-1 text-slate-400">
              <li>About Us</li>
              <li>Team (optional)</li>
              <li>Careers (if applicable)</li>
              <li>Blog (if planned)</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-2 text-lg">Services</h4>
            <ul className="space-y-1 text-slate-400">
              <li>How It Works</li>
              <li>Schedule a Pickup</li>
              <li>Price List</li>
              <li>Eco-Store</li>
            </ul>
          </div>
        </div>

        {/* Right Section: Subscribe & Social */}
        <div className="md:col-span-2 flex flex-col justify-between space-y-6 md:space-y-0">
          {/* Subscribe */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay up to date</h4>
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full py-2 pl-4 pr-10 rounded-md bg-gray-800 text-white placeholder-gray-400"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <FaPaperPlane />
              </button>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/sortus.ewaste?igsh=MWg5Z2dicWNtdmdxZA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} SortUs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
