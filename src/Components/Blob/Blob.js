import React from "react";
import Footer from "../Footer/Footer";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";
import b6 from "../../assets/b6.png";
import styles from "./Blob.module.css";

export default function Blob() {
  const blobs = [
    {
      id: 1,
      src: b1,
      title: "Adventure Blob",
      description: "Explore the uncharted territories with this amazing blob.",
      category: "Adventure",
      date: "2024-01-10",
    },
    {
      id: 2,
      src: b2,
      title: "Classic Blob",
      description: "A timeless blob for every occasion. Perfect for daily use.",
      category: "Classic",
      date: "2023-12-25",
    },
    {
      id: 3,
      src: b3,
      title: "Urban Blob",
      description: "Perfect for the city life, this blob offers unmatched comfort.",
      category: "Urban",
      date: "2024-02-15",
    },
    {
      id: 4,
      src: b4,
      title: "Nature Blob",
      description: "Inspired by nature, this blob brings peace and tranquility.",
      category: "Nature",
      date: "2024-03-01",
    },
    {
      id: 5,
      src: b5,
      title: "Mystic Blob",
      description: "A mysterious blob that offers both elegance and strength.",
      category: "Mystic",
      date: "2024-01-20",
    },
    {
      id: 6,
      src: b6,
      title: "Futuristic Blob",
      description: "Step into the future with this sleek, high-tech blob.",
      category: "Futuristic",
      date: "2024-02-05",
    },
  ];

  return (
    <>
      <div className={styles.blobContainer}>
        <div className={styles.blobItems}>
          <h2>Our Latest Blobs</h2>
          <div className={styles.blobList}>
            {blobs.map((blob) => (
              <div className={styles.blobItem} key={blob.id}>
                <img src={blob.src} alt={blob.title} className={styles.blobImage} loading="lazy"/>
                <div className={styles.blobDetails}>
                  <h3>{blob.title}</h3>
                  <p>{blob.description}</p>
                  <p className={styles.blobDate}>Date Added: {blob.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
