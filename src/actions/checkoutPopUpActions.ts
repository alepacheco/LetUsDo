export function setCheckoutEmailValid(validEmail: boolean) {
  return {
    type: 'SET_CHECKOUT_EMAIL_VALID',
    validEmail
  };
}

export function setCheckoutEmail(email: string) {
  return {
    type: 'SET_CHECKOUT_EMAIL',
    email
  };
}
