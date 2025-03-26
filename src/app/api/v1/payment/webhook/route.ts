// app/api/webhook/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
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

  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      // Handle successful payment (e.g., update booking status)
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
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
