import { createStore, compose, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
// 'routerMiddleware': the new way of storing route changes with redux middleware since rrV4.
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createRootReducer from '../reducers';


function configureStoreProd(initialState: any) {
  const middlewares = [
    thunk
  ];

  return createStore(
    createRootReducer(), // root reducer with router state
    initialState,
    compose(applyMiddleware(...middlewares)),
  );
}
const configureStore = configureStoreProd;

export default configureStore;
