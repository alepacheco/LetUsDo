import React from 'react';
import { History } from 'history';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import App from 'src/App';
import initGa from 'src/utils/analytics';

export const Root: React.FC<{ store: any; history: History }> = ({ store, history }) => {
  initGa(history);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
