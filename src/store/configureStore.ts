import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

function configureStore(initialState: any) {
  const middlewares = [thunk];

  return createStore(
    createRootReducer(), // root reducer with router state
    initialState,
    compose(applyMiddleware(...middlewares))
  );
}

export default configureStore;
