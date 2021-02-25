import React from 'react';
import './searchBar.css';
import {FaRegHeart} from "react-icons/fa";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const SearchBar = ({ onInputChange, onButtonSubmit }) => {
 
  return (
      <div className="input-group">
        <input className="input-group__input" placeholder="Что хотите посмотреть?" onChange={onInputChange}/>
        <Link to="/addToFav" className="input-group__addToFav"><FaRegHeart ></FaRegHeart></Link>
        <button className="input-group__button" type="button" onClick={onButtonSubmit}>Найти</button>
      </div>
  )     
}

export default SearchBar;