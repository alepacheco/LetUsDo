import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { LandingHeader } from '../../src/components/LandingHeader';

jest.mock('../static/images/undraw_process.svg', () => () => <div> img </div>);

describe('<LandingHeader />', () => {
  it('renders', () => {
    const wrapper = shallow(<LandingHeader />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});