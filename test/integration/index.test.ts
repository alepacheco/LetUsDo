/* eslint-disable no-undef */
import { setup, teardown } from 'jest-dev-server';
import axios from 'axios';

describe('Integration tests', () => {
  beforeAll(async () => {
    jest.setTimeout(300000);
    await setup({
      command: `now dev --listen 9888`,
      launchTimeout: 300000,
      port: 9888
    });
    jest.setTimeout(5000);

    
  });

  afterAll(async () => {
    await teardown();
  });

  it('loads /api/', async () => {
    const { status, data } = await axios.get('http://localhost:9888/api/');

    expect(status).toBe(200);
    expect(data).toBe('Api index');
  });

  it('loads index.html page', async () => {
    const { status, data } = await axios.get('http://localhost:9888/');

    expect(status).toBe(200);
    expect(data.includes('<html>')).toEqual(true);
  });
});


