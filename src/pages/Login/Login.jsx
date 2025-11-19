import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/api";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await API.post("/user/login", {
        email,
        password,
      });

      // show backend message (success or info)
      if (res.data.message) {
        setMessage(res.data.message);
      }

      // Successful login
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/user/dashboard");
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.detail || "Server error. Try again.";
      setMessage(errorMsg);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn1">Login</button>

          {message && (
            <p
              className="login-message"
              style={{
                color: message.toLowerCase().includes("login")
                  ? "green"
                  : "red",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {message}
            </p>
          )}

          <p className="login-footer">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;