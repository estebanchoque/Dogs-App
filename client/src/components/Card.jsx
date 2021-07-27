import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Card.css";

const Card = ({ id, name, temperament, image, reference_image_id }) => {
  // Process and render image
  const imageRender = (img) => {
    if (typeof img === "string") {
      return img;
    } else if (img.hasOwnProperty("url")) {
      return img.url;
    } else {
      return `https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`;
    }
  };

  const temperamentRender =
    (Array.isArray(temperament) &&
      temperament
        .map((elem) => elem.name)
        .join(", ")
        .trim()) ||
    temperament;

  return (
    <NavLink className="card-link" to={`/home/${id}`}>
      <div className="card">
        <img src={imageRender(image)} alt="" />
        <h2>{name}</h2>
        <p>{temperamentRender}</p>
      </div>
    </NavLink>
  );
};

export default Card;
