import React from 'react';
import './searchBar.css';

const SearchBar = ({ onInputChange, onButtonSubmit }) => {
 
  return (
      <div className="input-group">
          <input className="input-group__input" placeholder="Что хотите посмотреть?" onChange={onInputChange}/>
          <button className="input-group__button" type="button" onClick={onButtonSubmit}>Найти</button>
      </div>
  )     
}

export default SearchBar;