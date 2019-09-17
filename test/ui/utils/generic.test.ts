/* eslint-disable no-undef, import/no-unresolved */
import { validateEmail } from 'src/utils/generic';

describe('generic utils', () => {
  it('validateEmail', () => {
    expect(validateEmail('example@exam.co')).toEqual(true);
    expect(validateEmail('example@example.com')).toEqual(true);
    expect(validateEmail('example@exampcom')).toEqual(false);
    expect(validateEmail('exampleexample.com')).toEqual(false);
    expect(validateEmail('')).toEqual(false);
  });
});
