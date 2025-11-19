import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/api";
import "./Signup.css";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "CUSTOMER",
  });

  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-fill username with email
    if (name === "email") {
      setFormData((prev) => ({
        ...prev,
        email: value,
        username: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // Payload formatted EXACTLY as backend requires
    const payload = {
      full_name: formData.fullName,
      email_name: formData.email,
      password: formData.password,
      role: formData.role,
    };

    try {
      const res = await API.post("/user/create", payload);
      const backendMessage = res.data.message;

      if (backendMessage === "user add") {
        setSuccessMsg("Signup successful! Redirecting...");
        setTimeout(() => navigate("/login"), 1200);
      } else {
        setError(backendMessage);
      }
    } catch (err) {
      if (err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else {
        setError("Signup failed! Try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create an Account</h2>

        <form onSubmit={handleSubmit}>
          {/* Username (readonly auto-filled) */}
          <input
            type="text"
            name="username"
            placeholder="Username (auto-filled)"
            value={formData.username}
            onChange={handleChange}
            required
            readOnly
          />

          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {/* Hidden Role */}
          <input type="hidden" name="role" value={formData.role} />

          {/* Error Message */}
          {error && (
            <p className="error-text" style={{ color: "red", fontWeight: "bold" }}>
              {error}
            </p>
          )}

          {/* Success Message */}
          {successMsg && (
            <p className="success-text" style={{ color: "green", fontWeight: "bold" }}>
              {successMsg}
            </p>
          )}

          {/* Submit Button */}
          <button type="submit" className="signup-btn">
            Sign Up
          </button>

          {/* Redirect to Login */}
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