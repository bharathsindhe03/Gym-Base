import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";

export default function Shop() {
  const categories = [
    {
      id: 1,
      src: s1,
      title: "Elegant Dress",
      description: "A perfect blend of style and comfort for formal occasions.",
      type: "Girls",
      price: 1200,
    },
    {
      id: 2,
      src: s2,
      title: "Casual Top",
      description: "Stay trendy and relaxed with this casual top.",
      type: "Girls",
      price: 800,
    },
    {
      id: 3,
      src: s3,
      title: "Workout Gear",
      description: "Designed for maximum flexibility and performance.",
      type: "Girls",
      price: 1500,
    },
    {
      id: 4,
      src: s4,
      title: "Summer Outfit",
      description: "Lightweight and breathable for sunny days.",
      type: "Girls",
      price: 1000,
    },
    {
      id: 5,
      src: s5,
      title: "Men's Formal Suit",
      description: "A premium suit for the modern gentleman.",
      type: "Men",
      price: 2500,
    },
  ];

  const [filterType, setFilterType] = useState("All");
  const [maxPrice, setMaxPrice] = useState(5000);

  const handleFilterTypeChange = (type: string) => {
    setFilterType(type);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };

  const filteredCategories = categories.filter(
    (item) =>
      (filterType === "All" || item.type === filterType) &&
      item.price <= maxPrice
  );

  return (
    <>
      <div className="p-6 animate-fade-in">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Shop Our Collection
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Section */}
          <div className="md:w-1/4 border-r md:border-gray-300 pr-4">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Category</h3>
              {["All", "Girls", "Men"].map((type) => (
                <button
                  key={type}
                  className={`block w-full px-4 py-2 mb-2 rounded-md transition-colors ${
                    filterType === type
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => handleFilterTypeChange(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Price Filter */}
            <div>
              <h3 className="text-lg font-medium mb-2">Price</h3>
              <label htmlFor="priceRange" className="block mb-2">
                Max Price: ₹{maxPrice}
              </label>
              <input
                type="range"
                id="priceRange"
                min="500"
                max="5000"
                step="100"
                value={maxPrice}
                onChange={handlePriceChange}
                className="w-full accent-blue-600"
              />
            </div>
          </div>

          {/* Shop Items Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-transform hover:scale-105 animate-fade-in"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto rounded-md mb-4"
                  loading="lazy"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                <p className="font-bold text-gray-900 mt-2">
                  Price: ₹{item.price}
                </p>
                <p className="text-sm text-gray-500">Category: {item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
