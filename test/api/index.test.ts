import indexApi from '../../api/index';

describe('api /', () => {
  it('returns', () => {
    const req: any = jest.fn();
    const res: any = { send: jest.fn() };

    indexApi(req, res);

    expect(res.send).toHaveBeenCalledWith('Api index');
  });
});
