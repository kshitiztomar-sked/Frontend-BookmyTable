import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // ⭐ Added
import "./ResturantLogin.css";

const ResturantLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [msgType, setMsgType] = useState("");

  const navigate = useNavigate(); // ⭐ Added

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setMsgType("");

    const { email, password } = formData;

    if (!email || !password) {
      setMsgType("error");
      setMessage("Email and password are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/restorent/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log("Backend Response:", result);

      if (result.message) {
        if (result.token) {
          // SUCCESS LOGIN
          localStorage.setItem("token", result.token);
          setMsgType("success");
          setMessage(result.message);

          // ⭐ Redirect to dashboard after success
          setTimeout(() => {
            navigate("/restaurant/dashboard"); // <-- change path if needed
          }, 800);

        } else {
          // ERROR
          setMsgType("error");
          setMessage(result.message);
        }
        return;
      }

      setMsgType("error");
      setMessage("Unexpected server response.");
    } catch (err) {
      setMsgType("error");
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="restaurant-login-container">
      <div className="restaurant-login-card">
        <h2>🍽 Restaurant Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
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
              required
            />
          </div>

          {message && (
            <p className={msgType === "error" ? "error-text" : "success-text"}>
              {message}
            </p>
          )}

          <button type="submit" className="login-btn3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResturantLogin;