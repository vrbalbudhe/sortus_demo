import React from "react";
import ProductCard from "../ProductCard";
import RoleNavbar from "../RoleNavbar"; 

const products = [
  { name: "AC", subtext: "1.5 ton", price: "900", image: "./images/ac.jpg" },
  { name: "Laptop", price: "150", image: "./images/laptop.jpg" },
  { name: "Refrigerator", price: "500", image: "./images/fridge.jpg" },
  { name: "UPS", price: "50", image: "./images/ups.jpg" },
  { name: "CPU", price: "100", image: "./images/cpu.jpg" },
  { name: "Monitor", price: "100", image: "./images/monitor.jpg" },
];

const Pricelist_Individual: React.FC = () => {
  return (
    <>
      {/* Add Navbar */}
      <RoleNavbar role="individual" />
      
      {/* Apply background color here */}
      <div className="bg-[#EDF4ED] min-h-screen py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricelist_Individual;
