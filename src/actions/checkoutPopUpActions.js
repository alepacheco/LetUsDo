export function setCheckoutEmailValid(validEmail) {
  return {
    type: 'SET_CHECKOUT_EMAIL_VALID',
    validEmail
  };
}

export function setCheckoutEmail(email) {
  return {
    type: 'SET_CHECKOUT_EMAIL',
    email
  };
}
