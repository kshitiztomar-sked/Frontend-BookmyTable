import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
