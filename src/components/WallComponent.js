import React from "react";
import "./css/walltiles.css";

const WallComponent = (props) => {
  return (
    <div className={`wall-items ${props.className}`}>
      <div className="wall-image">
        <img src={props.image} alt="" />
      </div>
      <div className="wall-review">
        <div className="wall-info">
          <h3 className="wall-name">{props.name}</h3>
          <p className="wall-comment">{props.describe}</p>
        </div>
        <div className="rating">
          <span>
            <i class="fa-solid fa-star"></i> {props.rate}
          </span>
        </div>
      </div>
      <div className="wall-price">
        <div className="price">
          <span>${props.price}</span>
        </div>
        <div className="order">
          <button>+ Order</button>
        </div>
      </div>
    </div>
  );
};

export default WallComponent;
