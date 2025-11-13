import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ navigation hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login success
    console.log("Login submitted:", { email, password });

    // ✅ Redirect to User Dashboard (mock login success)
    navigate("/user/dashboard");
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
              type="email"
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
