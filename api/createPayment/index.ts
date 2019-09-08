import { NowRequest, NowResponse } from '@now/node';
import Stripe from 'stripe';
import { methodFilter } from '../utils/middleware';
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const executePayment = async ({ id, amount = 100 }) => {
  try {
    const { status } = await stripe.charges.create({
      amount, // in cents 100cents == 1gbp
      currency: 'gbp',
      description: 'Let Us Do Ltd.',
      source: id
    });

    if (status === 'succeeded') {
      return true;
    }
  } catch (error) {
    console.log('Error on payment: ', id, error.message);
  }

  return false;
};

const handler = async (req: NowRequest, res: NowResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { token, email, taskText } = req.body || {};
  res.send({ token, email, taskText });

  const paymentCompleted = await executePayment(token);

  if (!paymentCompleted) {
    res.status(500).json({ error: 'payment' });
  }

  res.status(200).json({ status: 'ok' });
  // const savedSuccesfully = saveDataToDB({
  //   email,
  //   taskText,
  //   cardId: token.card.id,
  //   cardBrand: token.card.brand,
  //   cardCountry: token.card.country,
  //   clientIp: token.client_ip,
  //   created: token.created,
  //   livemode: token.livemode
  // });

  // if (!savedSuccesfully) {
  //   res.status(500).json({ error: 'database' });
  // }

  // sendReceiptEmail();

  // sendAlert();
};

export default methodFilter(handler, 'POST');
