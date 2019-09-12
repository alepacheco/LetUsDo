export function setDialog(state: string) {
  return {
    type: 'SET_CHECKOUT_DIALOG',
    state,
  };
}

export function setTaskTest(text: string) {
  return {
    type: 'SET_TASK_TEST',
    text,
  };
}
