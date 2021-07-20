import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './styles/NavBar.module.css';
import SearchBar from './SearchBar';

const NavBar = ({ onSearch }) => {
  return (
    <div className={s.navBar}>
      <NavLink className={s.logo} to="/home">
        <h1>Henry Dogs</h1>
      </NavLink>
      <SearchBar />
      <Link to="/create">
        <button className={s.btn}>Create a dog!</button>
      </Link>
    </div>
  )
};

export default NavBar;