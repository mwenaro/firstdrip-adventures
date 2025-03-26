import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const { tourId, amount, currency,tourName="Tour", customerEmail = 'your@email.com' } = await request.json();

    // // Create a PaymentIntent
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: amount * 100, // Convert to cents
    //   currency: currency || 'usd',
    //   metadata: {
    //     tour_id: tourId,
    //   },
    //   // In a real app, you might want to add:
    //   // automatic_payment_methods: { enabled: true },
    // });

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: currency || 'usd',
        metadata: {
          tour_id: tourId,
          tour_name: tourName, // Add this from your request
          customer_email: customerEmail, // Add this from your request
        },
        receipt_email: customerEmail,
      });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}