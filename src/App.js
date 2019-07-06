/* eslint-disable import/no-named-as-default */
import { Route, Switch, Link } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <div>
        <Breadcrumb className="nav-header">
          <Breadcrumb.Item as="div" active ><Link to="/">Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item as="div" active><Link to="/about">About</Link></Breadcrumb.Item>
          <Breadcrumb.Item as="div" active><Link to="/none">FAQ</Link></Breadcrumb.Item>
        </Breadcrumb>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
