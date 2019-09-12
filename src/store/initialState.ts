type InitialState = {};

const initialState: any = {
  taskModal: {
    checkoutPopupState: 'closed',
    taskText: '',
    applePayAvailable: null
  },
  checkoutPopUp: {
    validEmail: false,
    email: ''
  }
};

export default initialState;
