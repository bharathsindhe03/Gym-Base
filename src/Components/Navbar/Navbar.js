import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarBrand}>
          <img src={logo} alt="Brand Logo" className={styles.logo} />
        </div>
        <div className={styles.navbarLinks}>
          <Link
            to="/"
            className={`${styles.navbarLink} ${
              activeLink === "/" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            to="/classes"
            className={`${styles.navbarLink} ${
              activeLink === "/classes" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("/classes")}
          >
            Classes
          </Link>
          <Link
            to="/trainer"
            className={`${styles.navbarLink} ${
              activeLink === "/trainer" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("/trainer")}
          >
            Trainer
          </Link>
          <Link
            to="/shop"
            className={`${styles.navbarLink} ${
              activeLink === "/shop" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("/shop")}
          >
            Shop
          </Link>
          <Link
            to="/blob"
            className={`${styles.navbarLink} ${
              activeLink === "/blob" ? styles.active : ""
            }`}
            onClick={() => handleLinkClick("/blob")}
          >
            Blob
          </Link>
        </div>
      </div>
    </nav>
  );
}
