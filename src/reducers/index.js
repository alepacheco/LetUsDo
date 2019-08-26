import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import taskModal from './taskModalReducer';
import checkoutPopUp from './checkoutPopUpReducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  taskModal,
  checkoutPopUp,
});

export default rootReducer;
