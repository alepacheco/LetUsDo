/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CheckoutApplePay } from 'components/CheckoutPopUp/stripe/CheckoutApplePay';

const flushPromises = () => new Promise(setImmediate);

describe('<CheckoutApplePay />', () => {
  const stripeMock: any = {
    paymentRequest: () => ({
      on: () => ({}),
      show: () => ({}),
      canMakePayment: async () => true
    })
  };
  const props = {
    setApplePayAvailable: true,
    actions: {
      setApplePayAvailable: jest.fn()
    },
    stripe: stripeMock,
    taskText: 'Task description'
  };

  it('renders', async () => {
    const wrapper = shallow(<CheckoutApplePay {...props} />);
    await flushPromises();

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(props.actions.setApplePayAvailable).toHaveBeenLastCalledWith(true);
  });

  it('not renders if disabled', async () => {
    const stripeMock: any = {
      paymentRequest: () => ({
        on: () => ({}),
        show: () => ({}),
        canMakePayment: async () => false
      })
    };
    const props = {
      setApplePayAvailable: false,
      actions: {
        setApplePayAvailable: jest.fn()
      },
      stripe: stripeMock,
      taskText: 'Task description'
    };

    const wrapper = shallow(<CheckoutApplePay {...props} />);
    await flushPromises();

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(props.actions.setApplePayAvailable).toHaveBeenLastCalledWith(false);
  });
});
