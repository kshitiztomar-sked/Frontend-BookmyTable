import React, { useState } from "react";
import "./UserProfile.css";
import UserDashboardNavbar from "../../components/UserDashboardNavbar/UserDashboardNavbar";
import Footer from "../../components/Footer/Footer";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Sawan Patel",
    email: "sawan@example.com",
    phone: "9876543210",
    city: "Indore",
  });

  return (
    <div className="profile-page">
      <UserDashboardNavbar />

      <div className="profile-container">
        <h2 className="profile-title">👤 User Profile</h2>

        <div className="profile-card">
          <div className="profile-row">
            <span className="label">Name:</span>
            <span className="value">{user.name}</span>
          </div>

          <div className="profile-row">
            <span className="label">Email:</span>
            <span className="value">{user.email}</span>
          </div>

          <div className="profile-row">
            <span className="label">Phone:</span>
            <span className="value">{user.phone}</span>
          </div>

          <div className="profile-row">
            <span className="label">City:</span>
            <span className="value">{user.city}</span>
          </div>

          <button className="edit-btn" onClick={() => (window.location.href = "/user/edit-profile")}>Edit Profile </button>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
