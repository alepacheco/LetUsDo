/* eslint-disable no-undef */
import { setCheckoutEmailValid, setCheckoutEmail } from '../../src/actions/checkoutPopUpActions';

describe('checkoutPopUpActions', () => {
  it('setCheckoutEmailValid', () => {
    expect(setCheckoutEmailValid('email@example.com')).toEqual({ type: "SET_CHECKOUT_EMAIL_VALID", validEmail: "email@example.com" });
  });

  it('setCheckoutEmail', () => {
    expect(setCheckoutEmail('email@example.com')).toEqual({
      email: "email@example.com",
      type: "SET_CHECKOUT_EMAIL"
    });
  });
});
