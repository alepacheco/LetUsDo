/* eslint-disable import/no-named-as-default */
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { hot } from 'react-hot-loader';
import HomePage from './pages/HomePage';

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </div>
);

export default hot(module)(App);
