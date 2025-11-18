import React, { useState } from "react";
import styles from "./UserEditProfile.module.css";
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
    <div className={styles.editProfilePage}>
      <UserDashboardNavbar />

      <div className={styles.editProfileContainer}>
        <h2 className={styles.editProfileTitle}>✏️ Edit Profile</h2>

        <form className={styles.editProfileForm} onSubmit={handleSubmit}>

          <div className={`${styles.formGroup} ${styles.imageUpload}`}>
            <label>Profile Image:</label>
            <input
              type="file"
              accept="image/*"
              name="profile_image"
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Contact Number:</label>
            <input
              type="text"
              name="user_contact_no"
              value={formData.user_contact_no}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label>Address Line 1:</label>
            <input
              type="text"
              name="address_1"
              value={formData.address_1}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Address Line 2:</label>
            <input
              type="text"
              name="address_2"
              value={formData.address_2}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Pincode:</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.saveBtn}>
            Save Changes
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default UserEditProfile;
