import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login"; // ✅ Import your Login page

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar /> {/* ✅ Always visible on all pages */}

      <Routes>
        {/* 🏠 Home page */}
        <Route path="/" element={<Hero />} />

        {/* 🔐 Login page */}
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer /> {/* ✅ Always visible on all pages */}
    </Router>
  );
}

export default App;
