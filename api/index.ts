import { NowRequest, NowResponse } from '@now/node';

const handler = (req: NowRequest, res: NowResponse) => {
  res.send('Api index');
};

export default handler;
