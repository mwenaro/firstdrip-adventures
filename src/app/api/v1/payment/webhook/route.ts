// app/api/webhook/route.ts
import { stripe } from "@/lib/stripe";
import { dbCon } from "@/libs/mongoose/dbCon";
import { NextResponse } from "next/server";
import { PaymentMethod } from "@/types/tour"; // Assuming enum exists
import { TourPaymentService } from "@/contollers/TourPaymentService";
import Stripe from "stripe";
import { TourBooking } from "@/models/TourBooking";
import { generateUserTourPaymentConfirmation } from "@/libs/nodemailer/email-templates-generators";
import { sendTestEmail } from "@/libs/nodemailer/gmail2";

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

  await dbCon(); // Ensure DB connection before DB actions
  const paymentService = new TourPaymentService();

  switch (event.type) {
    case "payment_intent.succeeded": {
      const pi = event.data.object as Stripe.PaymentIntent;
      const bookingId = pi.metadata?.bookingId;

      if (!bookingId) {
        console.warn("No bookingId found in metadata");
        break;
      }

      await paymentService.addPayment({
        bookingId,
        paidAmount: pi.amount_received / 100,
        method: PaymentMethod.STRIPE,
        stripePaymentId: pi.id,
        note: "Stripe payment intent succeeded via webhook",
      });

      console.log(`Booking ${bookingId} paid ${pi.amount_received / 100}`);
      break;
    }

    case "charge.succeeded": {
      const charge = event.data.object as Stripe.Charge;
      const bookingId = charge.metadata?.bookingId;

      if (!bookingId) {
        console.warn("No bookingId found in metadata");
        break;
      }
      await dbCon();
      const {  email, name } = await TourBooking.findById(
        bookingId
      );

      // send email to customer
      const emailBopdy = generateUserTourPaymentConfirmation(
        name,
        `$${charge.amount / 100}`,
        new Date().toLocaleDateString()
      );
      await sendTestEmail(email, "Payment Confirmation", emailBopdy, true);
      await paymentService.addPayment({
        bookingId,
        paidAmount: charge.amount / 100,
        method: PaymentMethod.STRIPE,
        stripePaymentId: charge.payment_intent as string,
        note: "Stripe charge succeeded via webhook",
      });

      console.log(`Charge recorded for booking ${bookingId}`);
      break;
    }

    case "payment_intent.payment_failed": {
      const failedPI = event.data.object as Stripe.PaymentIntent;
      console.log(`Payment failed: ${failedPI.last_payment_error?.message}`);
      break;
    }

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
