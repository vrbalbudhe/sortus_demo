import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
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

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2 text-lg">Legal</h4>
          <ul className="space-y-1 text-slate-400">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund / Cancellation Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-400 mt-6">
        © {new Date().getFullYear()} SortUs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
