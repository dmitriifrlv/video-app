import './App.css';
import React from 'react';
import AppLayout from './app.layout'
import { Switch, Route} from 'react-router-dom'
import SignIn from './common.blocks/signin/SignIn';
import ProtectedRoute from './protected.route'
import SaveVideoCard from './common.blocks/saveVideoCard/saveVideoCard'


function App() {

  return (
    <div>
      <Switch>
      <Route exact path="/signin" component = {SignIn} />
      <Route exact path="/addToFav" component = {SaveVideoCard} />
      <ProtectedRoute
        exact
        component = {AppLayout}/>
      <Route path="*" component={()=> "404 NOT FOUND"} />
      </Switch>
    </div>
    
  )
}
    

export default App;
