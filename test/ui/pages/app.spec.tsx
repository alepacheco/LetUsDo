/* eslint-disable no-undef, import/no-unresolved */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MyApp from 'src/../pages/_app';

jest.mock('src/utils/analytics', () => () => {});

describe('<MyApp />', () => {
  const FakeComponent: any = ({ foo }: any) => <p>{foo}</p>;
  const fakeRouter: any = {};

  it('renders', () => {
    const wrapper = shallow(
      <MyApp Component={FakeComponent} pageProps={{ foo: 'bar' }} router={fakeRouter} />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(toJson(wrapper.find(FakeComponent).dive())).toMatchSnapshot();
  });
});
