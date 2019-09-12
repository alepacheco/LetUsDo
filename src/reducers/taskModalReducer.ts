import objectAssign from 'object-assign';
import initialState from '../store/initialState';

export default function taskBoxReducer(
  state = initialState.taskModal,
  action: { type: string; text: string; state: string; applePayAvailable: boolean | null }
) {
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

    case 'SET_APPLE_PAY_AVAILABLE':
      newState = objectAssign({}, state);
      newState.applePayAvailable = action.applePayAvailable;

      return newState;

    default:
      return state;
  }
}
