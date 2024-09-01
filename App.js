import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/05/18095855/cooking.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <h3> Res Name</h3>
      <h4>Cuisine details</h4>
      <h4>4.2 star</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

root.render(<Applayout />);
