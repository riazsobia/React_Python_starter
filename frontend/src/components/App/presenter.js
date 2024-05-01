import React from 'react';
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";

import "./styles.module.scss";
// import Footer from "components/Footer/";
import Login from "components/Login/";
import Main from "components/Main/";
// import Header from "components/Header/";


const App = props => [
    props.isLoggedIn ? null : <Redirect to="/" key={0} />,
    // props.isLoggedIn ? <Header key={1} {...props} /> : null,
    props.isLoggedIn ? <PrivateRoutes key={3} selectedService={props.selectedService} /> : <PublicRoutes key={3} />,
    // <Footer key={4} />
  ]
  
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}

const PrivateRoutes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
)

const PublicRoutes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
  </Switch>
)

export default App;
  