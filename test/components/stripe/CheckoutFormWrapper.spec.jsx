/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { CheckoutFormWrapper } from '../../../src/components/stripe/CheckoutFormWrapper';

process.env.STRIPE_FRONT = 'mykey';
describe('<CheckoutFormWrapper />', () => {
  it('renders', () => {
    const wrapper = shallow(<CheckoutFormWrapper />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
