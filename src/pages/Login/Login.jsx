import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // to show success/error messages
  const navigate = useNavigate(); // for redirect

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message || "Login successful!");
        localStorage.setItem("token", data.token); // store token
        navigate("/user/dashboard"); // ✅ redirect after success
      } else {
        const errorData = await response.json();
        setMessage(errorData.detail || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      setMessage("Something went wrong. Please try again later.");
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Login to your BookMyTable account</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn1">
            Login
          </button>

          {message && <p className="login-message">{message}</p>} {/* shows backend response */}

          <p className="login-footer">
            Don’t have an account?{" "}
            <Link to="/signup">
              <span>Sign Up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
