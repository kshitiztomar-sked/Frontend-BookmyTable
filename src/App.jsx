// App.jsx (Final Updated Version)
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";

// ===== Global Components =====
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

// ===== User Pages =====
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import UserProfile from "./pages/UserProfile/UserProfile";
import UserEditProfile from "./pages/UserEditProfile/UserEditProfile";
import UserRestaurantExplore from "./pages/UserRestaurantExplore/UserRestaurantExplore";
import UserBookings from "./pages/Bookings/UserBookings";
import UserFoodMenu from "./pages/UserFoodMenu/UserFoodMenu";


// ===== Restaurant Pages =====
import ResturantIndex from "./pages/ResturantIndex/ResturantIndex";
import RegisterRestaurant from "./pages/RegisterResturant/RegisterResturant";
import ResturantLogin from "./pages/ResturantLogin/ResturantLogin";
import ResturantDashboard from "./pages/ResturantDashboard/ResturantDashboard";

// ===== Restaurant Single Forms =====
import SpecificationsForm from "./pages/ResturantForms/SpecificationsForm";
import RestaurantInfoForm from "./pages/ResturantForms/RestaurantInfoForm";
import AddressDetailsForm from "./pages/ResturantForms/AddressDetailsForm";
import BankDetailsForm from "./pages/ResturantForms/BankDetailsForm";
import ContactDetailsForm from "./pages/ResturantForms/ContactDetailsForm";
// ===== Multi-Step Wizard =====
import RestaurantWizard from "./pages/ResturantForms/RestaurantWizard";


// ===== Layout Wrapper =====
const Layout = () => {
  const location = useLocation();

  // Hide Navbar & Footer on restaurant workflow
  const hideLayout =
  location.pathname.startsWith("/restaurant") ||
  location.pathname.startsWith("/user");

  
  

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/profile" element={<><UserProfile /></>}/>
        <Route path="/user/edit-profile" element={<> <UserEditProfile /></>} />
        <Route path="/user/restaurant/:id" element={<UserRestaurantExplore />} />
        <Route path="/user/bookings" element={<UserBookings />} />
        <Route path="/user/restaurant/:id/menu" element={<UserFoodMenu />} />


        {/* Restaurant Routes */}
        <Route path="/restaurant" element={<ResturantIndex />} />
        <Route path="/restaurant/register-restaurant" element={<RegisterRestaurant />} />
        <Route path="/restaurant/login" element={<ResturantLogin />} />
        <Route path="/restaurant/dashboard" element={<ResturantDashboard />} />


        {/* Restaurant Register Single Forms */}
        <Route path="/restaurant/specifications" element={<SpecificationsForm />} />
        <Route path="/restaurant/info" element={<RestaurantInfoForm />} />
        <Route path="/restaurant/address" element={<AddressDetailsForm />} />
        <Route path="/restaurant/bank" element={<BankDetailsForm />} />
        <Route path="/restaurant/contact" element={<ContactDetailsForm />} />

        {/* Restaurant Multi-step Form Wizard */}
        <Route path="/restaurant/register-details" element={<RestaurantWizard />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
};

// ===== Main App =====
export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
