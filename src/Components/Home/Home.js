import React from "react";
import styles from "./Home.css"; // Correctly importing the CSS module
import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <>
        <Navbar></Navbar>
        <div className={styles.container}>
            <h1>Welcome to Our Training Service</h1>
            <p>Breath. Train. Achieve.</p>
            <button>Start Your Search</button>
        </div>
    </>
  );
}
