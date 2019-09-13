/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CheckoutForm } from 'components/CheckoutPopUp/stripe/CheckoutForm';
import { submitPayment } from 'src/utils/stripe';
import { trackEvent } from 'src/utils/analytics';
const flushPromises = () => new Promise(setImmediate);

jest.mock('src/utils/stripe', () => ({
  submitPayment: jest.fn().mockReturnValue(true)
}));

jest.mock('src/utils/analytics', () => ({
  trackEvent: jest.fn()
}));


describe('<CheckoutForm />', () => {
  const stripeMock: any = {
    paymentRequest: () => ({
      on: () => { },
      canMakePayment: () => true
    }),
    elements: () => ({
      create: () => ({
        mount: () => { }
      })
    })
  };

  it('renders', () => {
    const all: any = {};

    const wrapper = shallow(
      <CheckoutForm
        actions={all}
        stripe={stripeMock}
        validEmail
        email="email@example.com"
        taskText="this is a test"
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });


  it('runs onClick', async () => {
    const actions = {
      setDialog: jest.fn()
    };

    const wrapper = shallow(
      <CheckoutForm
        actions={actions}
        stripe={stripeMock}
        validEmail
        email="email@example.com"
        taskText="this is a test"
      />
    );

    wrapper.find('.pay-button').simulate('click');
    await flushPromises();
    expect(trackEvent).toHaveBeenCalledTimes(3);
    expect(trackEvent).toHaveBeenLastCalledWith({
      action: 'purchase completed',
      category: 'purchase',
      label: 'credit card',
    });
    expect(submitPayment).toHaveBeenLastCalledWith({
      email: "email@example.com",
      stripe: {
        elements: expect.any(Function),
        paymentRequest: expect.any(Function),
      },
      taskText: "this is a test",
    });
  });
});
