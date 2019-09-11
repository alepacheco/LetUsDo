/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CheckoutPopUp } from 'components/CheckoutPopUp/index';

jest.mock('react-ga', () => ({ initialize: jest.fn() }));

describe('<CheckoutPopUp />', () => {
  it('renders open', () => {
    const wrapper = shallow(
      <CheckoutPopUp
        taskText="This is my task description"
        email="email@example.com"
        checkoutPopupState="open"
        actions={{}}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders closed', () => {
    const wrapper = shallow(
      <CheckoutPopUp
        taskText="This is my task description"
        email="email@example.com"
        checkoutPopupState="closed"
        actions={{}}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
