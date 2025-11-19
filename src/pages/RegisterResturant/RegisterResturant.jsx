import React, { useState } from "react";
import "./RegisterResturant.css";
import { useNavigate } from "react-router-dom";
import API from "../../api/api"; // backend axios instance

const RegisterRestaurant = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    restorent_name: "", 
    email: "",
    password: "",
    confirmPassword: "",
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

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const payload = {
      restorent_name: formData.restorent_name, 
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await API.post("/restorent/register", payload);
      const result = res.data;

      console.log("Backend Response:", result);

      if (result.message) {
        if (result.message === "restorent registerd") {
          setSuccess("Restaurant registered successfully! Redirecting...");

          // Redirect to restaurant login page
          setTimeout(() => {
            navigate("/restaurant/login");
          }, 1200);

        } else {
          // Backend error message (e.g. already registered)
          setError(result.message);
        }
        return;
      }

      setError("Unexpected server response.");

    } catch (err) {
      console.error(err);
      if (err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else {
        setError("Server error. Please try again.");
      }
    }
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
              name="restorent_name"
              value={formData.restorent_name}
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

          <button type="submit" className="register-btn2">
            Register
          </button>

          <button
            type="button"
            className="back-btn1"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterRestaurant;