import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./UserDashboardNavbar.css";

const UserDashboardNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* ===== Brand Logo ===== */}
        <div className="navbar-logo">
          <Link to="/user/dashboard">
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
          <NavLink
            to="/user/dashboard"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/user/bookings"
            onClick={() => setMenuOpen(false)}
          >
            My Bookings
          </NavLink>
          <NavLink
            to="/user/profile"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </NavLink>

          {/* ===== Logout Button ===== */}
          <button
            className="login-btn"
            onClick={() => {
              setMenuOpen(false);
              handleLogout();
            }}
          >
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
};

export default UserDashboardNavbar;
