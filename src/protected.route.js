import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import auth from './auth';

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route 
      {...rest} 
      render={props => {
      if (localStorage.getItem("authToken")) {
        return <Component {...props} />
      } else {
        return <Redirect to={
          {
            pathname: '/signin',
            state: {
              from: props.location
            }
          }
        }
        />
      }}}
    />
  );
};

export default ProtectedRoute