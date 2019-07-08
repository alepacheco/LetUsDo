import { combineReducers } from 'redux';
import taskModal from './taskModalReducer';
import checkoutPopUp from './checkoutPopUpReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  taskModal,
  checkoutPopUp
});

export default rootReducer;
