import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2022-11-15',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { plan, email } = req.body;
    
    // Calculate the price based on the plan
    const amount = plan === 'monthly' ? 4900 : 46800; // $49/month or $468/year
    const interval = plan === 'monthly' ? 'month' : 'year';
    
    // Create a customer
    const customer = await stripe.customers.create({
      email,
    });
    
    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      customer: customer.id,
      metadata: {
        plan,
        email,
      },
      description: `AI Meeting Minutes Agent - ${plan === 'monthly' ? 'Monthly' : 'Annual'} Subscription`,
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Failed to create payment intent' });
  }
}
