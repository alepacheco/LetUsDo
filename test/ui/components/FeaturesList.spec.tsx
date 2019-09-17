/* eslint-disable no-undef, import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { FeaturesList } from 'components/FeaturesList';

describe('<FeaturesList />', () => {
  it('renders', () => {
    const wrapper = shallow(<FeaturesList />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
