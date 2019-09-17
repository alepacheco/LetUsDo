/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CheckoutPopUpByType } from 'src/components/CheckoutPopUp/CheckoutPopUpByType';

jest.mock('react-ga', () => ({ initialize: jest.fn() }));

describe('<CheckoutPopUpByType />', () => {
  it('renders open', () => {
    const wrapper = shallow(
      <CheckoutPopUpByType
        taskText="This is my task description"
        email="email@example.com"
        checkoutPopupState="open"
        actions={{
          setCheckoutEmailValid: () => {},
          setCheckoutEmail: () => {},
          setDialog: () => {}
        }}
      />
    );

    expect(
      toJson(
        wrapper
          .find('GetContentByType')
          .dive()
      )
    ).toMatchSnapshot();
  });

  it('renders closed', () => {
    const wrapper = shallow(
      <CheckoutPopUpByType
        taskText="This is my task description"
        email="email@example.com"
        checkoutPopupState="closed"
        actions={{
          setCheckoutEmailValid: () => {},
          setCheckoutEmail: () => {},
          setDialog: () => {}
        }}
      />
    );

    expect(
      toJson(
        wrapper
          .find('GetContentByType')
          .dive()
          .dive()
      )
    ).toMatchSnapshot();
  });

  it('renders purchaseCompleted', () => {
    const wrapper = shallow(
      <CheckoutPopUpByType
        taskText="This is my task description"
        email="email@example.com"
        checkoutPopupState="purchaseCompleted"
        actions={{
          setCheckoutEmailValid: () => {},
          setCheckoutEmail: () => {},
          setDialog: () => {}
        }}
      />
    );

    expect(
      toJson(
        wrapper
          .find('GetContentByType')
          .dive()
          .dive()
      )
    ).toMatchSnapshot();
  });
});
