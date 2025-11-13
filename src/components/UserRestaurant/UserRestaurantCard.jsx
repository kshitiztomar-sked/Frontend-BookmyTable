import React from "react";
import "./UserRestaurant.css";

const UserRestaurantCard = ({ name, image, rating, cuisine, location }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />

      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-cuisine">{cuisine}</p>
        <p className="restaurant-location">{location}</p>
        <span className="restaurant-rating">⭐ {rating}</span>
        <button className="Explore-Button">Explore More</button>
      </div>
    </div>
  );
};

export default UserRestaurantCard;
