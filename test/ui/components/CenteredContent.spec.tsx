/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CenteredContent } from 'components/CenteredContent';

describe('<FeaturesList />', () => {
  it('renders', () => {
    const wrapper = shallow(<CenteredContent>Something</CenteredContent>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders reversed', () => {
    const wrapper = shallow(<CenteredContent reverse>Something</CenteredContent>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
