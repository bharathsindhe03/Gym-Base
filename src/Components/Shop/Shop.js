import React, { useState } from "react";
import Footer from "../Footer/Footer";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import styles from "./Shop.module.css";

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

  const handleFilterTypeChange = (type) => {
    setFilterType(type);
  };

  const handlePriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filteredCategories = categories.filter(
    (item) =>
      (filterType === "All" || item.type === filterType) &&
      item.price <= maxPrice
  );

  return (
    <>
      <div className={styles.shopContainer}>
        <h1 className={styles.title}>Shop Our Collection</h1>
        <div className={styles.shopLayout}>
          <div className={styles.filterSection}>
            <h2 className={styles.filterTitle}>Filters</h2>

            <div className={styles.filterGroup}>
              <h3>Category</h3>
              <button
                className={`${styles.filterButton} ${
                  filterType === "All" ? styles.active : ""
                }`}
                onClick={() => handleFilterTypeChange("All")}
              >
                All
              </button>
              <button
                className={`${styles.filterButton} ${
                  filterType === "Girls" ? styles.active : ""
                }`}
                onClick={() => handleFilterTypeChange("Girls")}
              >
                Girls
              </button>
              <button
                className={`${styles.filterButton} ${
                  filterType === "Men" ? styles.active : ""
                }`}
                onClick={() => handleFilterTypeChange("Men")}
              >
                Men
              </button>
            </div>

            <div className={styles.filterGroup}>
              <h3>Price</h3>
              <label htmlFor="priceRange">Max Price: ₹{maxPrice}</label>
              <input
                type="range"
                id="priceRange"
                min="500"
                max="5000"
                step="100"
                value={maxPrice}
                onChange={handlePriceChange}
                className={styles.priceSlider}
              />
            </div>
          </div>

          <div className={styles.shopWrapper}>
            {filteredCategories.map((item) => (
              <div key={item.id} className={styles.shopCard}>
                <img
                  src={item.src}
                  alt={item.title}
                  className={styles.shopImage}
                  loading="lazy"
                />
                <h3 className={styles.shopTitle}>{item.title}</h3>
                <p className={styles.shopDescription}>{item.description}</p>
                <p className={styles.shopPrice}>Price: ₹{item.price}</p>
                <p className={styles.shopType}>Category: {item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
