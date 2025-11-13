// App_Combined.jsx
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// ===== Components =====
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

// ===== User Pages =====
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import UserDashboard from "./pages/UserDashboard/UserDashboard";




// ===== Restaurant Pages =====
import ResturantIndex from "./pages/ResturantIndex/ResturantIndex";
import RegisterRestaurant from "./pages/RegisterResturant/RegisterResturant";
import ResturantLogin from "./pages/ResturantLogin/ResturantLogin";


// ===== Layout Wrapper =====
const Layout = () => {
  const location = useLocation();

  // Hide Navbar/Footer on specific routes
  const hideLayout =
    location.pathname.startsWith("/restaurant") ||
    location.pathname.startsWith("/user");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* ===== User Routes ===== */}
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />

        {/* ===== Restaurant Routes ===== */} 
        <Route path="/restaurant" element={<ResturantIndex />} />
        <Route path="/restaurant/register-restaurant" element={<RegisterRestaurant />} />
        <Route path="/restaurant/login" element={<ResturantLogin />} />

      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

// ===== Main App Entry =====
function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;




// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import Hero from "./components/Hero/Hero";
// import Login from "./pages/Login/Login";
// import SignUp from "./pages/SignUp/SignUp";
// import UserDashboard from "./pages/UserDashboard/UserDashboard";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* ===== Public Routes ===== */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar />
//               <Hero />
//               <Footer />
//             </>
//           }
//         />

//         <Route
//           path="/login"
//           element={
//             <>
//               <Navbar />
//               <Login />
//               <Footer />
//             </>
//           }
//         />

//         <Route
//           path="/signup"
//           element={
//             <>
//               <Navbar />
//               <SignUp />
//               <Footer />
//             </>
//           }
//         />

//         {/* ===== User Dashboard Route ===== */}
//         <Route
//           path="/user/dashboard"
//           element={
//             <>
//               <UserDashboard />
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
