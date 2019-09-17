/* eslint-disable no-undef, import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { FullFeature } from 'components/FullFeature';

describe('<FullFeature />', () => {
  it('renders', () => {
    const wrapper = shallow(
      <FullFeature Image={() => <div> img </div>} title="This is the title">
        This is the content inside
      </FullFeature>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
