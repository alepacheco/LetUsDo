import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { TaskBox } from '../../src/components/TaskBox';

describe('<TaskBox />', () => {
  it('renders', () => {
    const wrapper = shallow(
      <TaskBox
        taskText="Sample task"
        actions={{
          setDialog: () => {},
          setTaskTest: () => {}
        }}
        checkoutPopup={false}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
