import { useNavigate } from "react-router-dom";

const UserRestaurantCard = ({ id, name, image, rating, cuisine, location }) => {
  const navigate = useNavigate();

  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />
      <span className="restaurant-rating">⭐ {rating}</span>

      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <p className="restaurant-cuisine">{cuisine}</p>
        <p className="restaurant-location">{location}</p>

        <button
          className="Explore-Button"
          onClick={() => navigate(`/user/restaurant/${id}`)}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};
export default UserRestaurantCard;
