import React from "react";
import Card from "./Card";
import "./styles/Cards.css";

const Cards = ({ dogs }) => {
  return (
    <div className="cards">
      {dogs.map((elem) => (
        <Card
          key={elem.id}
          id={elem.id}
          name={elem.name}
          temperament={elem.temperament}
          image={elem.image.url}
        />
      ))}
    </div>
  );
};

export default Cards;
