export function setDialog(state: string) {
  return {
    type: 'SET_CHECKOUT_DIALOG',
    state,
  };
}

export function setTaskText(text: string) {
  return {
    type: 'SET_TASK_TEST',
    text,
  };
}
