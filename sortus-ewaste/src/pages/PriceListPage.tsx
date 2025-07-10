import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
  { name: "AC", subtext: "1.5 ton", price: "900", image: "./images/ac.jpg" },
  { name: "Laptop", price: "150", image: "./images/laptop.jpg" },
  { name: "Refrigerator", price: "500", image: "./images/fridge.jpg" },
  { name: "UPS", price: "50", image: "./images/ups.jpg" },
  { name: "CPU", price: "100", image: "./images/cpu.jpg" },
  { name: "Monitor", price: "100", image: "./images/monitor.jpg" },
];

const PriceListPage: React.FC = () => {
  return (
    <>
      {/* Apply background color here */}
      <div className="bg-[#EDF4ED] min-h-screen w-full py-10">
        <div className="max-w-full mx-auto">
          <div className="w-full justify-start items-start flex flex-wrap gap-4">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceListPage;
