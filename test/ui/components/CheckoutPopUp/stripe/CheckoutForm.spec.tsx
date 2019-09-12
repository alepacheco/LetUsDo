/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CheckoutForm } from 'components/CheckoutPopUp/stripe/CheckoutForm';

describe('<CheckoutForm />', () => {

  const stripeMock: any = {
    paymentRequest: () => ({
      canMakePayment: () => true
    }),
    elements: () => ({
      create: () => ({
        mount: () => {}
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
});
