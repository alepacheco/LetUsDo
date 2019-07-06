import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import taskModal from './taskModalReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  fuelSavings,
  taskModal
});

export default rootReducer;
