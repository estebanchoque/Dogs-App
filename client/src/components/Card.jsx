import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Card.css";

const Card = ({ id, name, temperament, image }) => {
  return (
    <NavLink className="card-link" to={`/home/${id}`}>
      <div className="card">
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p>{temperament}</p>
      </div>
    </NavLink>
  );
};

export default Card;
