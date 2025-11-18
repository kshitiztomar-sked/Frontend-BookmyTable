import React, { useState } from "react";
import "./ResturantLogin.css";

const ResturantLogin = () => {
  const [formData, setFormData] = useState({
    restaurant_name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { restaurant_name, email, password } = formData;

    if (!restaurant_name || !email || !password) {
      setError("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate successful login
    setSuccess(`Welcome back, ${restaurant_name}!`);
  };

  return (
    <div className="restaurant-login-container">
      <div className="restaurant-login-card">
        <h2>🍽 Restaurant Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Restaurant Name</label>
            <input
              type="text"
              name="restaurant_name"
              value={formData.restaurant_name}
              onChange={handleChange}
              placeholder="Enter restaurant name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          {error && <p className="error-text">{error}</p>}
          {success && <p className="success-text">{success}</p>}

          <button type="submit" className="login-btn3">
            Login
          </button>
        </form>
      </div>
     
    </div>
  );
};

export default ResturantLogin;
