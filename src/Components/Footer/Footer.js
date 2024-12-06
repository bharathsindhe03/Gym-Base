import React from "react";
import styles from "./Footer.module.css"; // Import the CSS Module styles
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png"; // Importing logo image

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Footer Top Section */}
        <div className={styles.footerTop}>
          {/* Gym Logo Section */}
          <div className={styles.footerLogo}>
            <img
              src={logo}
              alt="Gym Base Logo"
              className={styles.footerLogoImg}
            />
            <h3>Gym Base</h3>
            <p>
              Gym Base is more than just a fitness center. It's a community focused on building strength, health, and energy through personalized fitness solutions. Whether you're a beginner or an athlete, we offer the tools, support, and expertise to help you succeed.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className={styles.footerColumn}>
            <h4>Contact Us</h4>
            <p>Phone: +1 234 567 890</p>
            <p>Email: support@gymbase.com</p>
          </div>

          {/* Follow Us Section */}
          <div className={styles.footerColumn}>
            <h4>Follow Us</h4>
            <ul className={styles.socialLinks}>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Gym Base. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
