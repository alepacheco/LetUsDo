/* eslint-disable import/no-named-as-default */
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { hot } from 'react-hot-loader';
import HomePage from 'pages/HomePage';
import ApiPage from 'pages/ApiPage';

const App: React.FC<{}> = () => (
  <div>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/api-documentation" component={ApiPage} />
    </Switch>
  </div>
);

export default hot(module)(App);
