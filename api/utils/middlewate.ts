import { NowRequest, NowResponse } from '@now/node';

type Handler = (req: NowRequest, res: NowResponse) => void;

export const methodFilter = (handler: Handler, method: string) => {
  return (req: NowRequest, res: NowResponse) => {
    if (req.method !== method) {
      return () => {};
    }

    return handler(req, res);
  };
};
