import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/Home.css";
import Cards from "./Cards";
import NavBar from "./NavBar";
import { getDogs } from "../actions";

const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);
  const dogsFound = useSelector((state) => state.dogsFound);

  useEffect(() => {
    dispatch(getDogs());
  }, [])

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
        <Cards dogs={!dogsFound.length ? dogs : dogsFound} />
      </div>
    </>
  );
};

export default Home;
