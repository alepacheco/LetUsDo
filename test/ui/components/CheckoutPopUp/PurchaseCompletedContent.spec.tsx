/* eslint-disable no-undef, import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { PurchaseCompletedContent } from 'components/CheckoutPopUp/PurchaseCompletedContent';

describe('<PurchaseCompletedContent />', () => {
  it('renders', () => {
    const wrapper = shallow(<PurchaseCompletedContent />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
