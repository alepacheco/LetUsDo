/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CheckoutContent } from '../../../src/components/CheckoutPopUp/CheckoutContent';

describe('<CheckoutContent />', () => {
  it('renders', () => {
    const wrapper = shallow(
      <CheckoutContent
        taskText="This is a task"
        onChangeEmail={() => {}}
        email="email@example.com"
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
