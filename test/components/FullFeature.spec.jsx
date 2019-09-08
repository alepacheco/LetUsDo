import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { FullFeature } from '../../src/components/FullFeature';

describe('<FullFeature />', () => {
  it('renders', () => {
    const wrapper = shallow(
      <FullFeature Image={() => {}} title="This is the title">
        This is the content inside
      </FullFeature>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
