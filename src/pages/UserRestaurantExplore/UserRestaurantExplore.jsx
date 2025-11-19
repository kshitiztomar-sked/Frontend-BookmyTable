import React from "react";
import { Star, MapPin, Phone, Info, MessageCircle } from "lucide-react";
import styles from "./UserRestaurantExplore.module.css";
import UserDashboardNavbar from "../../components/UserDashboardNavbar/UserDashboardNavbar";
import Footer from "../../components/Footer/Footer";
import UserFoodItems from "./UserFoodItems";
import { useNavigate } from "react-router-dom";

const UserRestaurantExplore = () => {
  const navigate = useNavigate();
  return (
    <div>
      <UserDashboardNavbar />
    <div className={styles.page}>

      
      {/* Cover Image */}
      <div className={styles.cover}>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Cover"
        />
      </div>

      {/* Logo + Basic Info */}
      <div className={styles.header}>
        <img
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1"
          alt="Logo"
          className={styles.logo}
        />

        <div>
          <h1 className={styles.title}>Restaurant Name</h1>
          <p className={styles.subtitle}>
            Italian • North Indian • Chinese
          </p>

          {/* Stars */}
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className={styles.star} />
            ))}
            <span className={styles.reviewCount}>(120 reviews)</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.buttons}>
        <button className={styles.bookBtn} onClick={() => navigate(`/user/bookings`)} >Book a Table</button>

        <button className={styles.reviewBtn}>
          <MessageCircle size={16} /> Give Review
        </button>
      </div>

      {/* Info Boxes */}
      <div className={styles.grid}>
        
        {/* Specifications */}
        <div className={styles.box}>
          <h2 className={styles.boxTitle}>
            <Info size={18} /> Specifications
          </h2>
          <ul className={styles.list}>
            <li> Veg / Non-Veg</li>
            <li> Air Conditioned</li>
            <li> Live Music</li>
            <li> Family Seating</li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.box}>
          <h2 className={styles.boxTitle}>
            <Phone size={18} /> Contact
          </h2>
          <p className={styles.text}>+91 98765 43210</p>
          <p className={styles.text}>support@restaurant.com</p>
        </div>

        {/* Address */}
        <div className={styles.box}>
          <h2 className={styles.boxTitle}>
            <MapPin size={18} /> Address
          </h2>
          <p className={styles.text}>
            221B Baker Street, Sector 12,
            <br /> New Delhi, India
          </p>
        </div>

        {/* Extra Box */}
        <div className={`${styles.box} ${styles.fullWidth}`}>
          <h2 className={styles.boxTitle}>More Info</h2>
          <p className={styles.text}>
            This restaurant offers premium dining with authentic cuisines.
            Perfect for family gatherings, celebrations, and weekend dinners.
          </p>
        </div>

      </div>
      </div>
      <UserFoodItems />
      <Footer />
    </div>
  );
};

export default UserRestaurantExplore;
