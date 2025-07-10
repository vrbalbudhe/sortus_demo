// src/components/ProductCard.tsx
import React from "react";

type ProductCardProps = {
  name: string;
  price: string;
  image: string;
  subtext?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  subtext,
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center flex flex-col justify-center items-center w-80 h-60">
      <img src={image} alt={name} className="w-24 h-24 object-contain mb-4" />
      <h2 className="text-lg font-bold text-green-800">
        {name}{" "}
        {subtext && <span className="text-xs text-gray-500">({subtext})</span>}
      </h2>
      <p className="text-black font-semibold mt-2">₹{price}/Piece</p>
    </div>
  );
};

export default ProductCard;
