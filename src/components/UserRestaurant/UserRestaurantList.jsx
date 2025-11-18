import React from "react";
import UserRestaurantCard from "./UserRestaurantCard";
import "./UserRestaurant.css";
import royalSpiceImg from "../../assets/Images/istockphoto-1131393938-2048x2048.jpg";
import blueOrchidImg from "../../assets/Images/istockphoto-1131393938-2048x2048.jpg";
import goldenForkImg from "../../assets/Images/pexels-naimbic-2290753.jpg";
import a from "../../assets/Images/istockphoto-1131393938-2048x2048.jpg";
import b from "../../assets/Images/pexels-reneterp-2504911.jpg";
import c from "../../assets/Images/pexels-pixabay-262047.jpg";

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
      {
      id: 4,
      name: "The Golden Fork",
      image: c,
      rating: 4.8,
      cuisine: "Italian, Continental",
      location: "Indore, MP",
    },
      {
      id: 5,
      name: "The Golden Fork",
      image: a,
      rating: 4.8,
      cuisine: "Italian, Continental",
      location: "Indore, MP",
    },
      {
      id: 6,
      name: "The Golden Fork",
      image: b,
      rating: 4.8,
      cuisine: "Italian, Continental",
      location: "Indore, MP",
    },
    {
      id: 7,
      name: "The Golden Fork",
      image: b,
      rating: 4.8,
      cuisine: "Italian, Continental",
      location: "Indore, MP",
    },
    {
      id: 8,
      name: "The Golden Fork",
      image: b,
      rating: 4.8,
      cuisine: "Italian, Continental",
      location: "Indore, MP",
    },
    {
      id: 9,
      name: "The Golden Fork",
      image: royalSpiceImg,
      rating: 4.8,
      cuisine: "Italian, Continental",
      location: "Indore, MP",
    },
    {
      id: 10,
      name: "The Golden Fork",
      image: b,
      rating: 4.8,
      cuisine: "Italian, Continental",
      location: "Indore, MP",
    },
    {
      id:11,
      name: "The Golden Fork",
      image: b,
      rating: 4.8,
      cuisine: "Italian, Continental",
      location: "Indore, MP",
    },
    {
      id: 12,
      name: "The Golden Fork",
      image: royalSpiceImg,
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
