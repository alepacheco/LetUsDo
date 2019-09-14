export function setDialog(
  state: 'open' | 'purchaseCompleted' | 'closed' | 'purchaseError' | 'purchaseLoading'
) {
  return {
    type: 'SET_CHECKOUT_DIALOG',
    state
  };
}

export function setApplePayAvailable(applePayAvailable: boolean) {
  return {
    type: 'SET_APPLE_PAY_AVAILABLE',
    applePayAvailable
  };
}

export function setTaskText(text: string) {
  return {
    type: 'SET_TASK_TEST',
    text
  };
}
