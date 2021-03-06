/* eslint-disable no-undef, import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { FullFeatureList } from 'src/components/FullFeatureList';

describe('<FullFeatureList />', () => {
  it('renders', () => {
    const wrapper = shallow(<FullFeatureList />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
