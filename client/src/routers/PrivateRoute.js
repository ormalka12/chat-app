import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute(props) {
  console.log('Private route');
  console.log(`accessToken ${localStorage.getItem('accessToken')}`);
  const condition = localStorage.getItem('accessToken');

  return condition ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/login" />
  );
}
export default PrivateRoute;
