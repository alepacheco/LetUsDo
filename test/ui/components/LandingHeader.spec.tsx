/* eslint-disable no-undef, import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { LandingHeader } from 'components/LandingHeader';

jest.mock('src/static/images/undraw_process.svg', () => () => <div> img </div>);

describe('<LandingHeader />', () => {
  it('renders', () => {
    const wrapper = shallow(<LandingHeader />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
