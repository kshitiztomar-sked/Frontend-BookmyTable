import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "User", 
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-fill username with email
    if (name === "email") {
      setFormData((prev) => ({
        ...prev,
        email: value,
        username: value, // 👈 auto set username same as email
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    console.log("Form Data:", formData);

    // TODO: send `formData` to backend API (POST /signup)
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create an Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username (auto-filled from email)"
            value={formData.username}
            onChange={handleChange}
            required
            readOnly // 👈 makes it uneditable
          />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {/* Hidden role field */}
          <input type="hidden" name="role" value={formData.role} />

          {/* Show error message if passwords don’t match */}
          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          <p className="login-link">
           Already have an account?{" "}
      <Link to="/login">
        <span>Login</span>
      </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
