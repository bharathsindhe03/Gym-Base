import React from "react";
import Footer from "../../Components/Footer/Footer";
import athlete from "../../assets/ATHLETE.png";
import bodypump from "../../assets/BODY PUMP.png";
import crossfit from "../../assets/CROSSFIT.png";
import styles from "./Classes.module.css"; // Optional CSS module for styling

export default function Classes() {
  const categories = [
    {
      id: 1,
      src: athlete,
      desc: "Athlete training focuses on strength, endurance, and performance enhancement.",
    },
    {
      id: 2,
      src: bodypump,
      desc: "Body Pump is a high-energy class designed to tone and strengthen your body.",
    },
    {
      id: 3,
      src: crossfit,
      desc: "CrossFit combines functional movements with high-intensity interval training.",
    },
  ];

  return (
    <>
      <div className={styles.classesContainer}>
        <h1 className={styles.title}>Our Classes</h1>
        <div className={styles.classesWrapper}>
          {categories.map((category) => (
            <div key={category.id} className={styles.classCard}>
              <img
                src={category.src}
                alt={`Class ${category.id}`}
                className={styles.classImage}
                loading="lazy"
              />
              <p className={styles.classDesc}>{category.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
