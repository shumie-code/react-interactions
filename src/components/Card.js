import React from "react";
import "./Card.css";

const Card = props => (
  <div className={props.card.animation}>
    <div className="front" onClick={() => props.showBack(props.card)}>
      <img src="juice.jpg" alt="Vitamin Juice" className="card-image" />
      <div className="container">
        <h3>
          Vitamin Juice <span className="price">$24.99</span>
        </h3>
        <p>
          Get some vitamins in your daily beverages, skip the pills, get better
          now! Available in several flavors
        </p>
      </div>
    </div>
    <div
      className="container-back back"
      onClick={() => props.showFront(props.card)}
    >
      <h3>
        Vitamin Juice <span className="price">$24.99</span>
      </h3>
      <p>{props.card.description}</p>
    </div>
  </div>
);

export default Card;
