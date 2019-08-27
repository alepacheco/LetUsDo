import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from '../../src/pages/HomePage';

describe('<HomePage />', () => {
  it('renders', async () => {
    const wrapper = shallow(<HomePage />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
