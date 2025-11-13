import React from "react";
import "./UserDashboard.css";
import UserDashboardNavbar from "../../components/UserDashboardNavbar/UserDashboardNavbar";
import RestaurantList from "../../components/UserRestaurant/UserRestaurantList";
import Footer from "../../components/Footer/Footer"; 
import Hero from "../../components/Hero/Hero";

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <UserDashboardNavbar />
      <Hero/>

      <section className="dashboard-content">
        <h2 className="dashboard-title">Welcome Back, User!</h2>

        <div className="dashboard-cards">
          <div className="dashboard-card">🍴 Book a Table</div>
          <div className="dashboard-card">🛍️ View My Orders</div>
          <div className="dashboard-card">⭐ Give Feedback</div>
        </div>
      </section>

      <RestaurantList />
      <Footer/>
    </div>
  );
};

export default UserDashboard;
