import { dbCon } from "@/libs/mongoose/dbCon";
import { Payment } from "@/models/Payment";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  try {
    const {
      tourId,
      amount,
      currency,
      tourName = "Tour",
      customerEmail = "your@email.com",
    } = await request.json();

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
      currency: currency || "usd",
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
    console.error("Stripe error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  await dbCon();

  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get("start");
    const endDate = searchParams.get("end");

    const query: any = {};

    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }

    const payments = await Payment.find(query)
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    return NextResponse.json({ payments });
  } catch (err) {
    console.error("Error fetching payments:", err);
    return NextResponse.json(
      { error: "Failed to fetch payments" },
      { status: 500 }
    );
  }
}
