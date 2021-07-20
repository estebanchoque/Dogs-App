import React from "react";
import { useSelector } from "react-redux";
import "./styles/Home.css";
import Cards from "./Cards";
import NavBar from "./NavBar";

const Home = () => {
  const dogs = useSelector((store) => store.dogs);

  return (
    <>
      <NavBar />
      {!dogs || !dogs.length ? (
        <div className="loading">
          <div className="spinner" />
          <p className="spinner-title">Loading dogs...</p>
        </div>
      ) : (
        <h1 className="title">Choose a dog</h1>
      )}
      <div className="home">
        <Cards dogs={dogs} />
      </div>
    </>
  );
};

export default Home;
