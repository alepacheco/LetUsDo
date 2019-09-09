/* eslint-disable no-undef */
jest.mock('../../src/favicon.ico', () => {})
jest.mock('react-dom', ()=> ({render: jest.fn()}))

describe('<index />', () => {
  it('renders', () => {
    require('../../src/index');
  });
});


