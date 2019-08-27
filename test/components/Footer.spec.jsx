import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Footer } from '../../src/components/Footer';

describe('<Footer />', () => {
  it('renders', () => {
    const wrapper = shallow(<Footer />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
