import React, { useState } from "react";
import "./UserEditProfile.css";
import UserDashboardNavbar from "../../components/UserDashboardNavbar/UserDashboardNavbar";
import Footer from "../../components/Footer/Footer";

const UserEditProfile = () => {
  const [formData, setFormData] = useState({
    user_contact_no: "9876543210",
    dob: "",
    gender: "",
    profile_image: null,
    address_1: "",
    address_2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="edit-profile-page">
      <UserDashboardNavbar />

      <div className="edit-profile-container">
        <h2 className="edit-profile-title">✏️ Edit Profile</h2>

        <form className="edit-profile-form" onSubmit={handleSubmit}>

          {/* === Profile Image === */}
          <div className="form-group image-upload">
            <label>Profile Image:</label>
            <input
              type="file"
              accept="image/*"
              name="profile_image"
              onChange={handleChange}
            />
          </div>

          {/* === Contact Number === */}
          <div className="form-group">
            <label>Contact Number:</label>
            <input
              type="text"
              name="user_contact_no"
              value={formData.user_contact_no}
              onChange={handleChange}
            />
          </div>

          {/* === DOB === */}
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          {/* === Gender === */}
          <div className="form-group">
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* === Address 1 === */}
          <div className="form-group">
            <label>Address Line 1:</label>
            <input
              type="text"
              name="address_1"
              value={formData.address_1}
              onChange={handleChange}
            />
          </div>

          {/* === Address 2 === */}
          <div className="form-group">
            <label>Address Line 2:</label>
            <input
              type="text"
              name="address_2"
              value={formData.address_2}
              onChange={handleChange}
            />
          </div>

          {/* === City === */}
          <div className="form-group">
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          {/* === State === */}
          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          {/* === Pincode === */}
          <div className="form-group">
            <label>Pincode:</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>

          {/* === Country === */}
          <div className="form-group">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default UserEditProfile;
