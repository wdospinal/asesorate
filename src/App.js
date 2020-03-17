import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import * as routes from './constants/routes';
import LandingPage from './components/pages/landing';
import { connect } from 'react-redux';
import Login from './components/pages/login';
import _ from 'lodash';

function PrivateRoute ({component: Component, user, ...rest}) {
  console.log(_.isEmpty(user))
  return (
    <Route
      {...rest}
      render={(props) => _.isEmpty(user)
        ? <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        : <Component {...props} />}
    />
  )
}

const App = ({user}) =>
  <Router>
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.LOGIN} component={() => <Login />} />
      <Route user={user} path='/dashboard' component={LandingPage} />
  </Router>


const mapStateToProps = (state) => ({
  user: state.userState.user,
});

export default connect(mapStateToProps)(App);
