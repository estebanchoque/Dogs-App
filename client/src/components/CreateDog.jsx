import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createDog, getTemperaments } from "../actions/index";
import NavBar from "./NavBar";
import "./styles/CreateDog.css";

const CreateDog = () => {
  const dispatch = useDispatch();

  const temperaments = useSelector((store) => store.temperaments);

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);
  console.log(temperaments)

  // Inputs
  const [input, setInput] = useState({
    name: "",
    image: "",
    temperament: [],
  });
  const [weight, setWeight] = useState({
    weight_min: "",
    weight_max: "",
  });
  const [height, setHeight] = useState({
    height_min: "",
    height_max: "",
  });
  const [lifeSpan, setLifeSpan] = useState({
    life_span_min: "",
    life_span_max: "",
  });

  // OnSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // POST Data
    let postData = {
      name: input.name,
      weight: `${weight.weight_min} - ${weight.weight_max}`,
      height: `${height.height_min} - ${height.height_max}`,
      life_span: `${lifeSpan.life_span_min} - ${lifeSpan.life_span_max} years`,
      temperament: input.temperament,
      image: input.image,
    };

    dispatch(createDog(postData));

    // Reset inputs
    setInput({
      name: "",
      image: "",
      temperaments: [],
    });
    setWeight({
      weight_min: "",
      weight_max: "",
    });
    setHeight({
      height_min: "",
      height_max: "",
    });
    setLifeSpan({
      life_span_min: "",
      life_span_max: "",
    });
  };

  // OnChange
  const handleInputChange = (e) => {
    if (e.target.name === "temperament") {
      const arr = input[e.target.name];
      setInput({ ...input, [e.target.name]: arr.concat(e.target.value) });
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });
      setWeight({ ...weight, [e.target.name]: e.target.value });
      setHeight({ ...height, [e.target.name]: e.target.value });
      setLifeSpan({ ...lifeSpan, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <NavBar />
      <div className="createForm">
        <h1>Add a new breed</h1>
        <form onSubmit={handleSubmit}>
          <div className="section">
            <label className="label">Name</label>
            <input
              className="input"
              required
              type="text"
              autoComplete="off"
              name="name"
              placeholder="Breed"
              value={input.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="section">
            <label className="label">Weight</label>
            <input
              className="input"
              required
              type="number"
              autoComplete="off"
              name="weight_min"
              placeholder="Min"
              value={weight.weight_min}
              onChange={handleInputChange}
            />
            <input
              className="input"
              required
              type="number"
              autoComplete="off"
              name="weight_max"
              placeholder="Max"
              value={weight.weight_max}
              onChange={handleInputChange}
            />
          </div>
          <div className="section">
            <label className="label">Height</label>
            <input
              className="input"
              required
              type="number"
              autoComplete="off"
              name="height_min"
              placeholder="Min"
              value={height.height_min}
              onChange={handleInputChange}
            />
            <input
              className="input"
              required
              type="number"
              autoComplete="off"
              name="height_max"
              placeholder="Max"
              value={height.height_max}
              onChange={handleInputChange}
            />
          </div>
          <div className="section">
            <label className="label">Life span</label>
            <input
              className="input"
              type="number"
              autoComplete="off"
              placeholder="Min"
              name="life_span_min"
              value={lifeSpan.life_span_min}
              onChange={handleInputChange}
            />
            <input
              className="input"
              type="number"
              autoComplete="off"
              placeholder="Max"
              name="life_span_max"
              value={lifeSpan.life_span_max}
              onChange={handleInputChange}
            />
          </div>
          <div className="div-temps">
            <label className="label">Temperaments</label>
            <ul className="ul-temps">
              {temperaments.map((elem) => (
                <li className="li-temps" key={elem.name}>
                  <input
                    className="input-temps"
                    type="checkbox"
                    name="temperament"
                    value={elem.id}
                    onChange={handleInputChange}
                  />
                  <label name={elem}>{elem.name}</label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label>Image</label>
            <input
              type="text"
              autoComplete="off"
              placeholder="Insert a image URL"
              name="image"
              value={input.image}
              onChange={handleInputChange}
            />
          </div>
          <div className="section">
            <input className="btn" type="submit" value="Create!" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDog;
