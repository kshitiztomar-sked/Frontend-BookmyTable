import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* ===== Brand Logo ===== */}
        <div className="navbar-logo">
          <Link to="/">
            🍽️ <span>Book</span>my<span>Table</span>
          </Link>
        </div>

        {/* ===== Hamburger (Mobile) ===== */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* ===== Nav Links ===== */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/menu" onClick={() => setMenuOpen(false)}>Menu</NavLink>
          <NavLink to="/booking" onClick={() => setMenuOpen(false)}>Book Table</NavLink>
          <NavLink to="/feedback" onClick={() => setMenuOpen(false)}>Feedback</NavLink>
          <NavLink to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
            Login
          </NavLink>
           <NavLink to="/Signup" className="login-btn" onClick={() => setMenuOpen(false)}>
            Sign Up
          </NavLink>
        </nav>
      </div>
    </header>
  );
};


export default Navbar;
