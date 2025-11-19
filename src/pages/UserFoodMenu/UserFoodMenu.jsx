import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UserFoodMenu.css";
import UserDashboardNavbar from "../../components/UserDashboardNavbar/UserDashboardNavbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

// Import updated image
import c from "../../assets/Images/pexels-pixabay-262047.jpg";

// Sample data - replace with API call later
const restaurantMenuData = {
  1: {
    name: "Royal Spice",
    foods: [
      {
        id: 101,
        name: "Paneer Butter Masala",
        description: "Rich creamy tomato gravy with soft paneer cubes",
        price: 299,
        image: c,
        tag: "Bestseller",
        category: "Main Course"
      },
      {
        id: 102,
        name: "Veg Biryani",
        description: "Aromatic rice cooked with Indian spices",
        price: 249,
        image: c,
        tag: "Spicy",
        category: "Main Course"
      },
            {
        id: 101,
        name: "Paneer Butter Masala",
        description: "Rich creamy tomato gravy with soft paneer cubes",
        price: 299,
        image: c,
        tag: "Bestseller",
        category: "Main Course"
      },
            {
        id: 101,
        name: "Paneer Butter Masala",
        description: "Rich creamy tomato gravy with soft paneer cubes",
        price: 299,
        image: c,
        tag: "Bestseller",
        category: "Main Course"
      },
            {
        id: 101,
        name: "Paneer Butter Masala",
        description: "Rich creamy tomato gravy with soft paneer cubes",
        price: 299,
        image: c,
        tag: "Bestseller",
        category: "Main Course"
      },
            {
        id: 101,
        name: "Paneer Butter Masala",
        description: "Rich creamy tomato gravy with soft paneer cubes",
        price: 299,
        image: c,
        tag: "Bestseller",
        category: "Main Course"
      },
    ]
  }
};

const UserFoodMenu = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cart, setCart] = useState({});

  const restaurant = restaurantMenuData[id] || restaurantMenuData[1];

  const handleAddToCart = (food) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[food.id]) {
        newCart[food.id] = {
          ...newCart[food.id],
          quantity: newCart[food.id].quantity + 1
        };
      } else {
        newCart[food.id] = { ...food, quantity: 1 };
      }

      return newCart;
    });
  };

  const handleDecreaseQuantity = (foodId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[foodId].quantity > 1) {
        newCart[foodId].quantity -= 1;
      } else {
        delete newCart[foodId];
      }

      return newCart;
    });
  };

  const handleIncreaseQuantity = (foodId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[foodId].quantity += 1;
      return newCart;
    });
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return Object.values(cart).reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="food-menu-page">

      <UserDashboardNavbar />
      <div className="food-menu-header">
        <div className="header-content">
          <div className="header-left">
            <button className="back-btn" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <div>
              <h1 className="restaurant-title">{restaurant.name}</h1>
              <p className="restaurant-subtitle">Menu</p>
            </div>
          </div>

          {getTotalItems() > 0 && (
            <div className="cart-summary">
              <span className="cart-items">{getTotalItems()} Items</span>
              <span className="cart-price">₹{getTotalPrice()}</span>
            </div>
          )}
        </div>
      </div>

      {/* Food Grid */}
      <div className="food-menu-container">
        <h2 className="menu-title">🍽️ Our Menu</h2>

        <div className="food-menu-grid">
          {restaurant.foods.map((food) => {
            const quantity = cart[food.id]?.quantity || 0;

            return (
              <div key={food.id} className="food-menu-card">
                <div className="food-image-container">
                  <img src={food.image} alt={food.name} className="food-image" />
                  <span className="food-tag">{food.tag}</span>
                </div>

                <div className="food-details">
                  <h3 className="food-name">{food.name}</h3>
                  <p className="food-description">{food.description}</p>

                  <div className="food-meta">
                    <span className="food-price">₹{food.price}</span>
                    <span className="food-category">{food.category}</span>
                  </div>

                  {quantity === 0 ? (
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(food)}
                    >
                      + Add to Dine
                    </button>
                  ) : (
                    <div className="quantity-controls">
                      <button
                        className="qty-btn"
                        onClick={() => handleDecreaseQuantity(food.id)}
                      >
                        −
                      </button>
                      <span className="quantity">{quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => handleIncreaseQuantity(food.id)}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Debug Cart */}
      {Object.keys(cart).length > 0 && (
        <div className="cart-debug">
          <h4>Cart Object (Live)</h4>
          <pre>{JSON.stringify(cart, null, 2)}</pre>
        </div>
      )}
    
    </div>
  );
};

export default UserFoodMenu;