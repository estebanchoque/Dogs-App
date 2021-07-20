import React from "react";
import { Link } from "react-router-dom";
import "./styles/PageError.css";

const PageError = () => {
  return (
    <div className="page-error">
      <h1 className="title-error">Oops!... Page not found.</h1>
      <Link to="/home">
        <button className="btn-home">Go to home!</button>
      </Link>
    </div>
  );
};

export default PageError;
