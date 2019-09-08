import indexApi from '../../api/index';

describe('api /', () => {
  it('returns', () => {
    const req = jest.fn();
    const res = { send: jest.fn() };

    const result = indexApi(<any>req, <any>res);

    expect(res.send).toHaveBeenCalledWith('Api index');
  });
});
