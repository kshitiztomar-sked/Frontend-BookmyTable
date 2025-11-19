import React from "react";
import "./UserFoodItems.css";
import { useNavigate } from "react-router-dom";


const UserFoodItems = () => {
  const navigate = useNavigate();
  const foodItems = [
    {
      id: 1,
      name: "Paneer Butter Masala",
      image: "https://img.freepik.com/premium-photo/traditional-indian-dish-chicken-tikka-masala-with-spicy-curry-meat-bowl-basmati-rice-bread-naan-yoghurt-raita-sauce-rustic-dark-background-top-view-close-up-indian-style-dinner-from_92134-969.jpg?semt=ais_incoming&w=740&q=80",
      description: "Rich creamy tomato gravy with soft paneer cubes.",
      tag: "Bestseller",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      image: "https://img.freepik.com/premium-photo/traditional-indian-dish-chicken-tikka-masala-with-spicy-curry-meat-bowl-basmati-rice-bread-naan-yoghurt-raita-sauce-rustic-dark-background-top-view-close-up-indian-style-dinner-from_92134-969.jpg?semt=ais_incoming&w=740&q=80",
      description: "Classic Italian delight with fresh mozzarella.",
      tag: "Chef Special",
    },
    {
      id: 3,
      name: "Veg Biryani",
      image: "https://img.freepik.com/premium-photo/traditional-indian-dish-chicken-tikka-masala-with-spicy-curry-meat-bowl-basmati-rice-bread-naan-yoghurt-raita-sauce-rustic-dark-background-top-view-close-up-indian-style-dinner-from_92134-969.jpg?semt=ais_incoming&w=740&q=80",
      description: "Aromatic rice cooked with Indian spices.",
      tag: "Spicy",
    },
    {
      id: 4,
      name: "Chocolate Brownie",
      image: "https://img.freepik.com/premium-photo/traditional-indian-dish-chicken-tikka-masala-with-spicy-curry-meat-bowl-basmati-rice-bread-naan-yoghurt-raita-sauce-rustic-dark-background-top-view-close-up-indian-style-dinner-from_92134-969.jpg?semt=ais_incoming&w=740&q=80",
      description: "Soft warm brownie with rich chocolate flavor.",
      tag: "Most Loved",
    },
  ];

  return (
    <div className="food-items-page">
      <h2 className="food-title">🍽️ Popular Food Items</h2>

      <div className="food-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            
            {/* Small Tag on Image */}
            <span className="food-tag-on-image">{item.tag}</span>

            <img src={item.image} alt={item.name} className="food-image" />

            <div className="food-info">
              <h3 className="food-name">{item.name}</h3>
              <p className="food-desc">{item.description}</p>

              <button className="add-btn" onClick={() => navigate(`/user/bookings`)}>Add to Dine</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFoodItems;

