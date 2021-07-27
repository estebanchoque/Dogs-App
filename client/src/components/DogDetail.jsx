import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import "./styles/DogDetail.css";

const DogDetail = ({ id }) => {
  // Select state.dogs
  const dogs = useSelector((state) => state.dogs);

  // Find dog by id
  const dogDetail = dogs.find((elem) => String(elem.id) === String(id));
  const { name, weight, height, life_span, temperament, image } = dogDetail;

  // Render details
  const imageRender = image.url || image;
  const weightRender = weight.metric || weight;
  const heightRender = height.metric || height;
  const temperamentRender =
    typeof temperament === "string"
      ? temperament
      : temperament &&
        temperament
          .map((elem) => elem.name)
          .join(", ")
          .trim();

  return (
    <>
      <NavBar />
      <div className="container-detail">
        <h1>{name}</h1>
        <img src={imageRender} alt="" width="600" height="400" />
        <p>Weight: {weightRender} kg</p>
        <p>Height: {heightRender} inches</p>
        <p>Life span: {life_span}</p>
        <p>Temperament: {temperamentRender}</p>
      </div>
    </>
  );
};

export default DogDetail;
