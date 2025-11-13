import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import "./ResturantIndex.css";

const ResturantIndex = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className="restaurant-index">
      {/* ===== Top Bar ===== */}
      <header className="topbar">
        <div className="brand-name">BookMyTable</div>
        <button className="login-btn2" onClick={() => navigate("/restaurant/login")}>
          Login
        </button>
      </header>

      {/* ===== Hero Section ===== */}
      <section className="hero-section">
        <div className="hero-content">
          <h3>Register Your Restaurant Here</h3>
          <h5>Connect Diners with Your Tables — Anytime, Anywhere</h5>
          <button
            className="register-btn1"
            onClick={() => navigate("/restaurant/register-restaurant")}
          >
            Register Now
          </button>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="restaurant-footer">
        <div className="footer-content">
          <div className="footer-brand">BookMyTable</div>
          <p className="footer-text">
            Empowering restaurants to connect with diners effortlessly.
          </p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} BookMyTable. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ResturantIndex;
