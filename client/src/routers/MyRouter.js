import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../components/Home';
import ChatWidget from '../components/chat/ChatWidget';
import PrivateRoute from './PrivateRoute';

function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <PrivateRoute path="/chat" component={ChatWidget}></PrivateRoute>
      </Switch>
    </Router>
  );
}

export default MyRouter;
