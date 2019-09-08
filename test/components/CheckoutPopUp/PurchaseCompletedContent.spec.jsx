/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { PurchaseCompletedContent } from '../../../src/components/CheckoutPopUp/PurchaseCompletedContent';

describe('<PurchaseCompletedContent />', () => {
  it('renders', () => {
    const wrapper = shallow(<PurchaseCompletedContent />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
