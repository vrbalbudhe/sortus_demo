import React, { useEffect, useState } from "react";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { getProductById } from "../../features/product/productSlice";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { useSelector } from "react-redux";

enum Category {
  OfficeSupplies = "Office Supplies",
  Electronics = "Electronics",
  Gifts = "Gifts",
  Drinkware = "Drinkware",
  Stationery = "Stationery",
  Bags = "Bags",
  Other = "Other",
}

interface Product {
  _id: string;
  name: string;
  description: string;
  images: Images[];
  price: number;
  points: number;
  stock: number;
  tags: Tag[];
  features: Features[];
  isHighlighted: boolean;
  category: Category;
}
interface Features {
  name: string;
}

interface Images {
  name: string;
}

interface Tag {
  name: string;
}

function ProductDetail({ product }: { product: Product }) {
  const imageLength = product.images.length;
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  const productImages = product?.images;
  return (
    <div className="max-w-full mx-auto bg-transparent overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 md:p-8 p-3">
        <div className="space-y-4">
          <div className="relative overflow-hidden rounded-md select-none">
            <img
              src={productImages[selectedImage]?.name}
              alt={product?.name}
              className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                isFavorited
                  ? "bg-red-500 text-white"
                  : "bg-white/80 text-gray-600 hover:bg-red-50 hover:text-red-500"
              }`}
            >
              <Heart
                className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`}
              />
            </button>
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-2 select-none">
            {productImages.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === index
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={img?.name}
                  alt={`${product?.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className=" w-full flex flex-wrap justify-start items-center gap-2">
            {product.tags.map((tag, index) => (
              <p className="bg-emerald-300 w-fit px-4 select-none text-gray-800 py-1 rounded-full">
                #{tag?.name}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-6 select-none">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Eco-Friendly
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Best Seller
              </span>
            </div>
            <h1 className="text-3xl font-semibold text-gray-800">
              {product.name}
            </h1>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-600">(4.8) • 1,234 reviews</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-3 justify-start">
              <span className=" bg-emerald-500 px-2 py-1 rounded-lg text-white">
                Points
              </span>
              <span className="text-4xl font-bold text-gray-900">
                {product?.points}
              </span>
            </div>
            <p className="text-green-600 font-medium">
              ✓ In stock ({product?.stock} available)
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {product?.description}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">
              Key Features
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {product?.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{feature?.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <label className="text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col space-x-2 justify-center items-center gap-2">
              <button className="md:w-1/2 w-full bg-emerald-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-emerald-600 transition-colors duration-300">
                Buy Now
              </button>
              <div className="w-full flex justify-start items-center gap-2">
                <button className="w-full flex border-2 border-emerald-600 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-colors duration-300 items-center justify-center space-x-2">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors duration-300">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductView() {
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const { selectedProduct, loading, error } = useSelector(
    (state: RootState) => state.product
  );

  const product = selectedProduct?.product;

  useEffect(() => {
    if (params?.id) {
      dispatch(getProductById(params.id));
    }
  }, [params?.id, dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
          <p className="text-lg text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-center text-red-600 text-lg">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full md:w-[90%] flex justify-center items-center md:py-4 md:px-4">
      <div className="md:container md:mx-auto">
        {product ? (
          <ProductDetail
            product={{
              ...product,
              category: Object.values(Category).includes(
                selectedProduct.product.category as Category
              )
                ? (product.category as Category)
                : Category.Other,
            }}
          />
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Product Not Found
            </h2>
            <p className="text-gray-600">
              The product you're looking for doesn't exist.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductView;
