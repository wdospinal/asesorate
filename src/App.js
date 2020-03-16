import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import './App.css';
import * as routes from './constants/routes';
import Navigation from './components/commons/navigation';
import LandingPage from './components/pages/landing';
import Login from './components/pages/login';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.LOGIN} component={() => <Login />} />
    </div>
  </Router>

export default App;
