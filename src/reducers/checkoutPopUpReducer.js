import objectAssign from 'object-assign';
import initialState from './initialState';

export default function fuelSavingsReducer(state = initialState.checkoutPopUp, action) {
  let newState;

  switch (action.type) {
    case 'SET_CHECKOUT_EMAIL_VALID':
      newState = objectAssign({}, state);
      newState.validateEmail = action.validateEmail;

      return newState;

    default:
      return state;
  }
}
