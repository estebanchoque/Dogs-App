import React, { useState } from "react";
import { useDispatch } from "react-redux";
import s from "./styles/SearchBar.module.css";
import * as actions from "../actions/index";

const SearchBar = () => {
  const dispatch = useDispatch();
  // const dogs = useSelector((store) => store.dogs);

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.searchDogs(input));
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        placeholder="What breed are you looking for?"
        value={input}
        onChange={handleChange}
      />
      <input className={s.btn} type="submit" value="Search!" />
    </form>
  );
};

export default SearchBar;
