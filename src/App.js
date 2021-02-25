import './App.css';
import React from 'react';
import AppLayout from './app.layout'
import Header from './common.blocks/header/Header'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import SignIn from './common.blocks/signin/SignIn';
import ProtectedRoute from './protected.route'



function App() {

  return (
    <div>
      <Switch>
      <Route exact path="/signin" component = {SignIn} />
      <ProtectedRoute
        exact
        component = {AppLayout}/>
      <Route path="*" component={()=> "404 NOT FOUND"} />
      </Switch>
    </div>
    
  )
}
    

export default App;