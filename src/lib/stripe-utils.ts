// import Stripe from 'stripe';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// export async function verifyPayment(paymentIntentId: string) {
//   try {
//     const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
//     return {
//       amount: paymentIntent.amount,
//       currency: paymentIntent.currency,
//       status: paymentIntent.status,
//       tourName: paymentIntent.metadata.tour_name || 'Unknown Tour',
//       tourId: paymentIntent.metadata.tour_id,
//       customerEmail: paymentIntent.receipt_email,
//     };
//   } catch (error) {
//     console.error('Error verifying payment:', error);
//     return null;
//   }
// }

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function verifyPayment(paymentIntentId: string) {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    
    return {
      amount: paymentIntent.amount,
      currency: paymentIntent.currency,
      status: paymentIntent.status,
      customerEmail: paymentIntent.receipt_email,
      tourName: paymentIntent.metadata.tour_name || 'Unknown Tour',
      created: new Date(paymentIntent.created * 1000).toLocaleString(),
    };
  } catch (error) {
    console.error('Error verifying payment:', error);
    return null;
  }
}