/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Root from '../../src/Root';

jest.mock('react-ga', () => ({
  initialize: jest.fn(),
  set: jest.fn(),
  pageview: jest.fn()
}));

describe('<Root />', () => {
  it('renders', () => {
    const history: any = {
      listen: jest.fn(),
      location: {
        pathname: '/'
      }
    };

    const store = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: jest.fn()
    };
    const wrapper = shallow(<Root store={store} history={history} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
