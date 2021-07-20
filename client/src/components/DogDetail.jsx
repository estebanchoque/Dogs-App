import React from "react";
import { useSelector } from "react-redux";

const DogDetail = (props) => {
  console.log(props);
  const dog = useSelector((store) => store.dogDetail);

  return (
    <div className="detail-container">
      <h1 className="breed-name">{dog.name}</h1>
      <p className="breed-weigth">{dog.weight}</p>
      <p className="breed-height">{dog.height}</p>
      <p className="breed-lifeSpan">{dog.life_span}</p>
      <ul className="temperaments-list">
        {dog.temperaments.map((elem) => (
          <li className="temp-item">{elem}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetail;
