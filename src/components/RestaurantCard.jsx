import { RESTAURANT_IMG_URL } from "../utils/constants";

export const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={RESTAURANT_IMG_URL}
      />
      <h3> Res Name</h3>
      <h4>Cuisine details</h4>
      <h4>4.2 star</h4>
    </div>
  );
};
