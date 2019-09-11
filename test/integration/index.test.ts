const { setup: setupDevServer, teardown: teardownDevServer } = require('jest-dev-server');

describe('Integration tests', () => {
  beforeAll(async () => {
    jest.setTimeout(300000);
    await setupDevServer({
      command: `now dev`,
      launchTimeout: 500000,
      port: 3000
    });
    jest.setTimeout(5000);

    return;
  });

  afterAll(async () => {
    await teardownDevServer();
  });

  it('starts', () => {
    expect(true).toBe(true);
  });
});
