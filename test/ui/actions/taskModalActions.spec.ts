/* eslint-disable no-undef */
import { setCheckoutEmailValid, setCheckoutEmail } from 'src/actions/checkoutPopUpActions';

describe('checkoutPopUpActions', () => {
  it('setCheckoutEmailValid', () => {
    expect(setCheckoutEmailValid(true)).toEqual({ type: "SET_CHECKOUT_EMAIL_VALID", validEmail: true });
  });

  it('setCheckoutEmail', () => {
    expect(setCheckoutEmail('email@example.com')).toEqual({
      email: "email@example.com",
      type: "SET_CHECKOUT_EMAIL"
    });
  });
});
