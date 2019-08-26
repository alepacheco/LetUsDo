export function setDialog(open) {
  return {
    type: 'SET_CHECKOUT_DIALOG',
    open,
  };
}

export function setTaskTest(text) {
  return {
    type: 'SET_TASK_TEST',
    text,
  };
}
