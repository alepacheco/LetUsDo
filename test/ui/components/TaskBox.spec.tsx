/* eslint-disable no-undef */
/* eslint no-global-assign:off */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { TaskBox } from 'src/components/TaskBox';
import { trackEvent } from 'src/utils/analytics';

jest.mock('src/utils/analytics', () => ({
  trackEvent: jest.fn()
}));

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
          setTaskText: () => { },
          setDialog: () => { }
        }}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('onClick', () => {
    const wrapper = shallow(
      <TaskBox
        taskText="Sample task"
        actions={{
          setTaskText: () => { },
          setDialog: () => { }
        }}
      />
    );

    wrapper.find('.get-it-done-button').simulate('click');
    expect(trackEvent).toHaveBeenLastCalledWith({
      action: "get it done button clicked",
      category: "click",
      label: "containing task: Sample task",
    })
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('on form type ', () => {
    const wrapper = shallow(
      <TaskBox
        taskText="Sample task"
        actions={{
          setTaskText: () => { },
          setDialog: () => { }
        }}
      />
    );

    wrapper.find('.task-form-input').simulate('change', { target: { value: 'Hello' } })
    expect(trackEvent).toHaveBeenLastCalledWith({
      action: "TaskBox text input change",
      category: "formChange",
      label: "Hello",
    })
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
