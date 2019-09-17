import { methodFilter } from '../../../api/utils/middleware';

describe('middleware', () => {
  describe('methodFilter', () => {
    it('should send request if method is correct', () => {
      const res: any = {
        send: jest.fn(),
        status: jest.fn()
      };

      const handler = ({}, res: any) => {
        res.send('OK');
      };

      const filteredHandler = methodFilter(handler, 'POST');

      const args: any = { method: 'POST' };
      filteredHandler(args, res);

      expect(res.send).toHaveBeenCalledWith('OK');
    });

    it('should send 500 if method is correct', () => {
      const res: any = {
        status: jest.fn(),
        send: jest.fn()
      };

      res.status.mockReturnValue(res);

      const handler = ({}, res: any) => {
        res.send('OK');
      };

      const filteredHandler = methodFilter(handler, 'POST');

      const args: any = { method: 'GET' };
      filteredHandler(args, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith('500');
    });
  });
});
