import React, { useState } from "react";
import "./RegisterResturant.css";
import { useNavigate } from "react-router-dom";

const RegisterRestaurant = () => {
  const navigate = useNavigate(); // ✅ You must define this

  const [formData, setFormData] = useState({
    restaurant_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    console.log("Restaurant Registered:", formData);
    setSuccess("Restaurant registered successfully!");

    setFormData({
      restaurant_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Register Your Restaurant 🍽️</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>
            Restaurant Name
            <input
              type="text"
              name="restaurant_name"
              value={formData.restaurant_name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Restaurant Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <button type="submit" className="register-btn2" onClick={() => navigate("/restaurant/register-details")}>
            Register
          </button>

          {/* ✅ Correct Back Button */}
          <button
            type="button"
            className="back-btn1"
            onClick={() => navigate("/")} // navigates to homepage
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterRestaurant;
