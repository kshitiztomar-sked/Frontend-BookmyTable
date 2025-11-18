import React from "react";
import { useParams } from "react-router-dom";
import UserDashboardNavbar from "../../components/UserDashboardNavbar/UserDashboardNavbar";
import Footer from "../../components/Footer/Footer";
import "./UserRestaurantExplore.css";

const UserRestaurantExplore = () => {
  const { id } = useParams();

  return (
    <div className="restaurant-explore-page">
      <UserDashboardNavbar />

      <div className="restaurant-explore-container">
        <h1 className="restaurant-title">Restaurant Details #{id}</h1>

        <div className="restaurant-section">
          <h2>📜 Menu</h2>
          <p>Show menu items here...</p>
        </div>

        <div className="restaurant-section">
          <h2>📍 Location</h2>
          <p>City, State</p>
          <button className="map-btn">View Map</button>
        </div>

        <div className="restaurant-section">
          <h2>⭐ Rating</h2>
          <p>4.6</p>
        </div>

        <div className="restaurant-section">
          <h2>🏡 Garden Spaces</h2>
          <p>Yes / No</p>
        </div>

        <div className="restaurant-section">
          <h2>📞 Contact</h2>
          <p>9876543210</p>
        </div>

        <div className="restaurant-section">
          <h2>📧 Email</h2>
          <p>example@restaurant.com</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserRestaurantExplore;
