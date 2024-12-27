import React from "react";
import Footer from "../Footer/Footer";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import styles from "./Trainer.module.css";

export default function Trainer() {
  const trainers = [
    {
      id: 1,
      src: p1,
      name: "John Doe",
      type: "Strength Coach",
    },
    {
      id: 2,
      src: p2,
      name: "Jane Smith",
      type: "Yoga Instructor",
    },
    {
      id: 3,
      src: p3,
      name: "Mike Johnson",
      type: "Personal Trainer",
    },
    {
      id: 4,
      src: p4,
      name: "Emily Davis",
      type: "Nutrition Specialist",
    },
  ];

  return (
    <>
      <div className={styles.trainerContainer}>
        <h1 className={styles.title}>Your Best Partner</h1>
        <h2 className={styles.subtitle}>Meet Our Team</h2>
        <p className={styles.description}>
          We are a team of experienced people, passionate about nutrition,
          sports, and fitness, with talent and knowledge unsurpassed in the
          industry. Get to know us.
        </p>
        <div className={styles.trainerWrapper}>
          {trainers.map((trainer) => (
            <div key={trainer.id} className={styles.trainerCard}>
              <img
                loading="lazy"
                src={trainer.src}
                alt={trainer.name}
                className={styles.trainerImage}
              />
              <h3 className={styles.trainerName}>{trainer.name}</h3>
              <p className={styles.trainerType}>{trainer.type}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
