import React from "react";
import "./Navbar.css"; // Import the CSS for the Navbar
import logo from "../../assets/logo.png"
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or brand name */}
        <div className="navbar-brand">
        <img src={logo} alt="Brand Logo" className="logo" />
        </div>

        {/* Navbar Links */}
        <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#classes" className="navbar-link">Classes</a>
          <a href="#trainer" className="navbar-link">Trainer</a>
          <a href="#shop" className="navbar-link">Shop</a>
          <a href="#blob-pages" className="navbar-link">Blob</a>
        </div>

        {/* Search button */}
        <div className="navbar-search">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button"><i class="fa fa-search"></i></button>
        </div>
      </div>
    </nav>
  );
}
