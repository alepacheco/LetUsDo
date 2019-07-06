import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {TaskModal} from '../../src/components/TaskModal';

describe('<TaskModal />', () => {
  it('renders', () => {
    const wrapper = shallow(<TaskModal
      taskText="Sample task"
      actions={{
          setDialog: () => {},
          setTaskTest: () => {}
      }}
      checkoutPopup={false}
    />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
