import React from "react";
import UserRestaurantCard from "./UserRestaurantCard";
import "./UserRestaurant.css";
import royalSpiceImg from "../../assets/Images/istockphoto-1131393938-2048x2048.jpg";
import blueOrchidImg from "../../assets/Images/istockphoto-1131393938-2048x2048.jpg";
import goldenForkImg from "../../assets/Images/istockphoto-1131393938-2048x2048.jpg";

const UserRestaurantList = () => {
  const restaurants = [
    {
      id: 1,
      name: "Royal Spice",
      image: royalSpiceImg,
      rating: 4.6,
      cuisine: "Indian, Mughlai",
      location: "Indore, MP",
    },
    {
      id: 2,
      name: "Blue Orchid",
      image: blueOrchidImg,
      rating: 4.3,
      cuisine: "Chinese, Asian",
      location: "Indore, MP",
    },
    {
      id: 3,
      name: "The Golden Fork",
      image: goldenForkImg,
      rating: 4.8,
      cuisine: "Italian, Continental",
      location: "Indore, MP",
    },
  ];

  return (
    <section className="restaurant-list">
      <h2 className="section-title">Top Restaurants</h2>
      <div className="restaurant-grid">
        {restaurants.map((r) => (
          <UserRestaurantCard key={r.id} {...r} />
        ))}
      </div>
    </section>
  );
};

export default UserRestaurantList;
