import { combineReducers } from 'redux';
import taskModal from './taskModalReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  taskModal
});

export default rootReducer;
