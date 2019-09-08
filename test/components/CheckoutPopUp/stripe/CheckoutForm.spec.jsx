/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CheckoutForm } from '../../../../src/components/CheckoutPopUp/stripe/CheckoutForm';

describe('<CheckoutForm />', () => {
  it('renders', () => {
    const wrapper = shallow(
      <CheckoutForm
        actions={{}}
        stripe={{}}
        validEmail
        email="email@example.com"
        taskText="this is a test"
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
