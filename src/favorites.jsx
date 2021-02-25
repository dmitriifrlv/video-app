import './App.css';
import SearchBar from './common.blocks/searchBar/SearchBar';
import { Component } from 'react';
import VideoList from './common.blocks/videoList/VideoList'
import Header from './common.blocks/header/Header'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function Favorites() {
    return (
      <div>
        <p>Избранное</p>
      </div>
      );
  }

export default Favorites;
