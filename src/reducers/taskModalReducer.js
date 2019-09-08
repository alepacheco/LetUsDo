import objectAssign from 'object-assign';
import initialState from './initialState';

export default function fuelSavingsReducer(state = initialState.taskModal, action) {
  let newState;

  switch (action.type) {
    case 'SET_CHECKOUT_DIALOG':
      newState = objectAssign({}, state);
      newState.checkoutPopupState = action.state;

      return newState;

    case 'SET_TASK_TEST':
      newState = objectAssign({}, state);
      newState.taskText = action.text;

      return newState;

    default:
      return state;
  }
}
