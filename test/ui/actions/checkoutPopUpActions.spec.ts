/* eslint-disable no-undef */
import { setDialog, setTaskTest } from 'src/actions/taskModalActions';

describe('taskModalActions', () => {
  it('setDialog', () => {
    expect(setDialog('open')).toEqual({
      state: 'open',
      type: "SET_CHECKOUT_DIALOG",
    });
  });

  it('setTaskTest', () => {
    expect(setTaskTest('This is my task')).toEqual({
      text: "This is my task",
      type: "SET_TASK_TEST",
    });

  });
});
