// app/api/webhooks/stripe/route.ts
import { NextResponse } from "next/server";
import { dbCon } from "@/libs/mongoose/dbCon";
import { Payment } from "@/models/Payment";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  await dbCon();

  const payload = await request.text();
  const signature = request.headers.get("stripe-signature")!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }

  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object;

      // Save to MongoDB
      await Payment.create({
        amount: paymentIntent.amount / 100,
        currency: paymentIntent.currency,
        status: paymentIntent.status,
        customerEmail: paymentIntent.receipt_email,
        stripePaymentIntentId: paymentIntent.id,
        tourId: paymentIntent.metadata.tourId,
      });
      break;

    // Add other event types as needed
  }

  return NextResponse.json({ received: true });
}
