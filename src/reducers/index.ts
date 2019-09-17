import { combineReducers } from 'redux';
import taskModal from './taskModalReducer';
import checkoutPopUp from './checkoutPopUpReducer';

const rootReducer = () => combineReducers({
  taskModal,
  checkoutPopUp,
});

export default rootReducer;
