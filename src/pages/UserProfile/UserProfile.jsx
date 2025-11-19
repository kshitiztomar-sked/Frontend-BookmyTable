import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserProfile.css";
import UserDashboardNavbar from "../../components/UserDashboardNavbar/UserDashboardNavbar";
import Footer from "../../components/Footer/Footer";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/user/profile",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`, // FIXED — MUST be inside backticks
            },
          }
        );

        const data = response.data;

        // If API returns no user → redirect to login
        if (!data.user_name || !data.user_email) {
          navigate("/login");
          return;
        }

        setUser({
          name: data.user_name,
          email: data.user_email,
          phone: data.user_phone || "", // optional fields
          city: data.user_city || "",
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch user profile. Please login again.");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading...</p>;

  if (error)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "2rem",
          color: "red",
          fontWeight: "bold",
        }}
      >
        {error}
      </p>
    );

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

          {user.phone && (
            <div className="profile-row">
              <span className="label">Phone:</span>
              <span className="value">{user.phone}</span>
            </div>
          )}

          {user.city && (
            <div className="profile-row">
              <span className="label">City:</span>
              <span className="value">{user.city}</span>
            </div>
          )}

          <button
            className="edit-btn"
            onClick={() => (window.location.href = "/user/edit-profile")}
          >
            Edit Profile
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserProfile;
