import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CheckoutPopUp } from '../../src/components/CheckoutPopUp';

jest.mock('react-ga', () => ({ initialize: jest.fn() }));

describe('<CheckoutPopUp />', () => {
  it('renders open', () => {
    const wrapper = shallow(
      <CheckoutPopUp
        taskText="This is my task description"
        email="email@example.com"
        show
        actions={{}}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders closed', () => {
    const wrapper = shallow(
      <CheckoutPopUp
        taskText="This is my task description"
        email="email@example.com"
        show={false}
        actions={{}}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
