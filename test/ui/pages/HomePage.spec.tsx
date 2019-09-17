/* eslint-disable no-undef, import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from 'src/../pages/index';

describe('<HomePage />', () => {
  it('renders', () => {
    const wrapper = shallow(<HomePage />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
