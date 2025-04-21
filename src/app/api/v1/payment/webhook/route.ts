// app/api/webhook/route.ts
import { stripe } from "@/lib/stripe";
import { dbCon } from "@/libs/mongoose/dbCon";
import { Payment } from "@/models/Payment";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get("stripe-signature")!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    console.error(
      `Webhook Error: ${err instanceof Error ? err.message : "Unknown error"}`
    );
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
  console.log({ eType: event.type });
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      // Handle successful payment (e.g., update booking status)
      await dbCon();
      // Save to MongoDB
      await Payment.create({
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency,
        status: paymentIntent.status,
        customerEmail: paymentIntent.receipt_email,
        stripePaymentIntentId: paymentIntent.id,
        tourId: paymentIntent.metadata.tourId,
      });
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      break;
      
    case "charge.succeeded":
      const charge = event.data.object as Stripe.Charge;

      await dbCon();
      await Payment.create({
        amount: charge.amount / 100,
        currency: charge.currency,
        status: charge.status,
        customerEmail: charge.billing_details.email,
        stripePaymentIntentId: charge.payment_intent as string,
        tourId: charge.metadata?.tourId, // Only if you passed it
      });

      console.log(`Charge for ${charge.amount} was successful!`);
      break;

    case "payment_intent.payment_failed":
      const failedPaymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(
        `Payment failed: ${failedPaymentIntent.last_payment_error?.message}`
      );
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
