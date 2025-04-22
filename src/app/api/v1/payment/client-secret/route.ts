import { stripe } from "@/lib/stripe";
import { PaymentStatus } from "@/types/tour";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      bookingId,
      amount,
      currency,
      customerEmail = "your@email.com",
      paymentType,
    } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: currency || "usd",
      metadata: {
        paymentType: ["25", "50", "75"].includes(paymentType)
          ? PaymentStatus.PARTIALLY_PAID
          : paymentType,
        bookingId: bookingId,
        customerEmail: customerEmail, // Add this from your request
      },
      receipt_email: customerEmail,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.error("Stripe error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
