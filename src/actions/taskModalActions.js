export function setDialog(state) {
  return {
    type: 'SET_CHECKOUT_DIALOG',
    state,
  };
}

export function setTaskTest(text) {
  return {
    type: 'SET_TASK_TEST',
    text,
  };
}
