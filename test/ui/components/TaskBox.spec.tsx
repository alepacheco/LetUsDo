/* eslint-disable no-undef */
/* eslint no-global-assign:off */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TaskBox } from 'src/components/TaskBox';

const constantDate = new Date('2017-06-13T04:41:20');

// @ts-ignore
Date = class extends Date {
  constructor() {
    super()
    return constantDate;
  }
};

describe('<TaskBox />', () => {
  it('renders', () => {
    const wrapper = shallow(
      <TaskBox
        taskText="Sample task"
        actions={{
          setTaskText: () => {},
          setDialog: () => {}
        }}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
