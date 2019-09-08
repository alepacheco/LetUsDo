import { NowRequest, NowResponse } from '@now/node';

type Handler = (req: NowRequest, res: NowResponse) => void;

export const methodFilter = (handler: Handler, method: string) => (
  req: NowRequest,
  res: NowResponse
) => {
  if (req.method !== method) {
    res.status(500).send('500');
    return;
  }

  return handler(req, res);
};
