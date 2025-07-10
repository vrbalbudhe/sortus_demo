import React, { useEffect, useState } from "react";
import { Heart, Search, X, ChevronDown, ChevronUp } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../features/product/productSlice";
import type { AppDispatch } from "../../store";
import { Link } from "react-router-dom";

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

interface FilterCardProps {
  tags: Tag[];
  categories: Category[];
  onCategoryChange: (selected: Category[]) => void;
  onPriceChange: (price: number) => void;
}

const FilterCard: React.FC<FilterCardProps> = ({
  tags,
  categories,
  onCategoryChange,
  onPriceChange,
}) => {
  const [activeTags, setActiveTags] = useState(tags);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [maxPrice, setMaxPrice] = useState(150);

  const removeTag = (tag: string) => {
    setActiveTags(activeTags.filter((t) => t?.name !== tag));
  };

  const handleCategoryToggle = (category: Category) => {
    let updated: Category[];
    if (selectedCategories.includes(category)) {
      updated = selectedCategories.filter((c) => c !== category);
    } else {
      updated = [...selectedCategories, category];
    }
    setSelectedCategories(updated);
    onCategoryChange(updated);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
    onPriceChange(value);
  };

  return (
    <aside className="bg-white p-4 rounded-lg shadow-md text-sm w-full md:w-auto h-fit">
      <h2 className="font-semibold text-lg text-gray-800 mb-3">Filter</h2>

      <div className="flex flex-wrap gap-2 mb-4">
        {activeTags.map((tag, index) => (
          <div
            key={index}
            className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center"
          >
            {tag?.name}
            <X
              className="ml-1 cursor-pointer w-3 h-3"
              onClick={() => removeTag(tag?.name)}
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <label className="block text-xs mb-2 font-medium">Price (Max)</label>
        <div className="text-xs text-gray-600 mb-2">0 - {maxPrice}</div>
        <input
          type="range"
          min={0}
          max={1000}
          value={maxPrice}
          onChange={handlePriceChange}
          className="w-full accent-green-600"
        />
      </div>

      <div className="space-y-3">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`cat-${category}`}
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryToggle(category)}
              className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
            />
            <label
              htmlFor={`cat-${category}`}
              className="text-xs text-gray-700 cursor-pointer"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};

const SearchAndSort: React.FC<{
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  setSortOrder: (order: "asc" | "desc" | "none") => void;
}> = ({ searchQuery, setSearchQuery, setSortOrder }) => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-3 py-2 rounded-lg border border-gray-200 w-full text-sm shadow-sm"
        />
        <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
      </div>

      <div className="flex gap-2">
        <button
          className="bg-white border px-3 py-2 rounded-full text-xs font-semibold text-green-700"
          onClick={() => setSortOrder("asc")}
        >
          Points ascending
        </button>
        <button
          className="bg-white border px-3 py-2 rounded-full text-xs font-semibold text-green-700"
          onClick={() => setSortOrder("desc")}
        >
          Points descending
        </button>
      </div>
    </div>
  );
};

interface ProductDetailCardProps {
  selectedProduct: Product;
  onNavigate: () => void;
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({
  selectedProduct,
  onNavigate,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full h-full bg-white p-3 rounded-md shadow-md flex md:flex-row flex-col justify-between items-center gap-5 mb-5">
      <Link to={`/product/view/${selectedProduct?._id}`}>
        <div className="relative w-full ">
          <img
            src={selectedProduct?.images[0].name}
            alt={selectedProduct?.name}
            className="rounded-sm md:h-[400px] select-none object-cover cursor-pointer"
            onClick={onNavigate}
          />
          <Heart
            onClick={() => setLiked(!liked)}
            className={`absolute top-7 left-7 w-6 h-6 p-1 rounded-full border-2 cursor-pointer transition
            ${liked ? "text-pink-500 border-pink-500 bg-white fill-current" : "text-gray-400 border-white bg-white"}`}
          />
        </div>
      </Link>

      <div className="md:w-[50%] w-full h-full flex flex-col justify-start items-start pt-2 pl-2">
        <div className="w-full flex justify-start items-center gap-2">
          <h2 className="text-3xl tracking-tight font-medium text-gray-900">
            {selectedProduct?.name}
          </h2>
          <p className=" bg-gray-500 border-2 text-white select-none px-2 py-0.5 text-sm rounded-full">
            Highlight
          </p>
        </div>
        <p className="text-sm text-gray-600 mt-3 mb-4">
          {selectedProduct?.category || "Office Supplies"}
        </p>
        <div className="bg-emerald-500 select-none pointer-events-none text-white px-3 py-1 rounded-md font-medium text-md mb-1">
          Points
        </div>
        <div className="text-4xl select-none pointer-events-none text-gray-700 font-bold mb-2">
          {selectedProduct?.points}
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">Quantity</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border rounded px-3 py-2 text-sm w-20"
          >
            {[1, 2, 3, 4, 5].map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-gray-50 mb-2 rounded-lg">
          <p className="text-sm text-gray-600">
            Answer the frequently asked question in a simple sentence, a longish
            paragraph, or even in a list.
          </p>
        </div>
        <div className="bg-gray-50 mb-5 flex gap-2">
          {selectedProduct?.tags?.map((tag: Tag, index) => (
            <p
              key={index}
              className="px-3 py-0.5 rounded-lg text-green-700 cursor-pointer select-none bg-green-100"
            >
              #{tag?.name}
            </p>
          ))}
        </div>
        <button className="bg-emerald-500 text-white px-3 py-3 rounded-lg hover:bg-emerald-700 transition text-sm font-semibold mb-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

interface ProductGridProps {
  products: Product[];
}
const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="w-full flex flex-wrap justify-start items-center gap-4">
      {products.map((product: Product, index: number) => (
        <div
          key={index}
          className="bg-white w-full md:w-fit rounded-lg shadow-md p-3 cursor-pointer md:hover:shadow-lg md:hover:scale-105 md:transition-all duration-200"
        >
          <img
            src={product?.images[0].name}
            alt={product?.name}
            className="h-40 w-full select-none object-cover rounded-sm mb-3"
          />
          <h4 className="font-semibold text-md text-slate-900 mb-1">
            {product?.name}
          </h4>
          <p className="border-2 select-none pointer-events-none rounded-full border-emerald-500 w-fit px-2 py-1 text-emerald-500 text-xs font-bold mb-3">
            <span className="text-gray-800 mr-1">{product?.points}</span>
            POINTS
          </p>
          <div className="flex justify-end gap-2">
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-emerald-700 transition">
              Add To Cart
            </button>
            <Link to={`/product/view/${product?._id}`}>
              <button className="border-2 border-emerald-500 text-emerald-500 hover:border-emerald-700 px-4 py-2 rounded-md text-xs font-semibold hover:text-white hover:bg-emerald-700 transition">
                Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const EcostoreProduct = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: any) => state?.product?.products);

  const [highlightedProduct, setHighlightedProduct] = useState<Product | null>(
    null
  );
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | "none">("none");

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      setHighlightedProduct(products[0]);
    }
  }, [products]);

  const handleNavigateToCheckout = () => {
    console.log("Navigating to checkout...");
  };

  const handleCategoryChange = (categories: Category[]) => {
    setSelectedCategories(categories);
  };

  const handlePriceChange = (price: number) => {
    setMaxPrice(price);
  };

  const filteredProducts = products
    .filter((product: Product) => {
      const inCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const inPrice = product.price <= maxPrice;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return inCategory && inPrice && matchesSearch;
    })
    .sort((a: Product, b: Product) => {
      if (sortOrder === "asc") return a.points - b.points;
      if (sortOrder === "desc") return b.points - a.points;
      return 0;
    });

  return (
    <div className="min-h-screen md:w-[90%] w-full flex flex-col justify-start items-center">
      <div className="w-[95%] md:w-full h-full flex md:flex-row flex-col justify-between items-start gap-4 mt-5">
        <div className="md:w-[20%] h-full w-full">
          <FilterCard
            tags={[{ name: "d" }, { name: "" }]}
            categories={Object.values(Category)}
            onCategoryChange={handleCategoryChange}
            onPriceChange={handlePriceChange}
          />
        </div>
        <main className="md:w-[80%] w-full">
          <SearchAndSort
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSortOrder={setSortOrder}
          />

          {highlightedProduct && (
            <ProductDetailCard
              selectedProduct={highlightedProduct}
              onNavigate={handleNavigateToCheckout}
            />
          )}
        </main>
      </div>

      <div className="mb-10 w-[95%] md:w-full">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default EcostoreProduct;
