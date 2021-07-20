import React from "react";
import { Link } from "react-router-dom";
import s from './styles/LandingPage.module.css';
import DogImg from '../img/landing-dogs.jpg';

const LandingPage = () => {
  return (
    <div className={s.container}>
      <img className={s.dogImg} src={DogImg} alt="" />
      <div className={s.text}>
        <h1>Welcome to Henry Dogs App!</h1>
        <hr />
        <h3>Here you can find all kinds of breeds</h3>
        <Link to="/home">
          <button className={s.btn} type="submit">Let's go!</button>
        </Link>
      </div>
    </div>
  )
};

export default LandingPage;