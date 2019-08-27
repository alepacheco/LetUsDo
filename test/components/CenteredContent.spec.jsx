import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { CenteredContent } from '../../src/components/CenteredContent';

describe('<FeaturesList />', () => {
  it('renders', () => {
    const wrapper = shallow(<CenteredContent>Something</CenteredContent>);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
