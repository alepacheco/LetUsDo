/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import initialState from './store/initialState';
import Root from './Root';
import 'src/styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

require('src/favicon.ico'); // Tell webpack to load favicon.ico
require('src/static/fonts/Jellee-Roman.ttf');

const store = configureStore(initialState);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept('./Root', () => {
    const NewRoot = require('./Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
