import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

function configureStore(initialState: any) {
  const middlewares = [thunk];

  return createStore(
    createRootReducer(), // root reducer with router state
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}

export default configureStore;
