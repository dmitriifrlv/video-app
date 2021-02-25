import React from 'react';
import Header from './common.blocks/header/Header'
import { Switch, Route } from 'react-router-dom'
import Favorites from './favorites';
import SearchComponent from './common.blocks/searchComponent/SearchComponent';
import { withRouter } from "react-router";
import './App.css';


const AppLayout = () => {
  return (
    <div>
      <Header/>
      <div className="appContainer">
        <div className="appContainer__app">
        <Switch>
          <Route path="/" exact component={SearchComponent} />
          {/* <SearchComponent /> */}
          {/* <Favorites /> */}
          <Route path="/favorites"  component={Favorites}/>
          </Switch>
        </div>
          
      </div>
    </div>
  )
}
export default AppLayout