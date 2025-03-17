"use client";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar fixed top-0 w-full">
      <div className="navbar-container">
        <div className="logo">
          <a href="/">
            <span className="logo-text">Bloomify</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <a href="/about" className="nav-link">
            Shop
          </a>
          <a href="/contact" className="nav-link">
            About
          </a>
          <a href="/why-plants" className="nav-link">
            Why Plants?
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <a href="/" className="mobile-link" onClick={toggleMenu}>
          Home
        </a>
        <a href="/about" className="mobile-link" onClick={toggleMenu}>
          About
        </a>
        <a href="/contact" className="mobile-link" onClick={toggleMenu}>
          Contact Us
        </a>
        <a href="/why-plants" className="mobile-link" onClick={toggleMenu}>
          Why Plants?
        </a>
      </div>
    </header>
  );
}

export default Navbar;
