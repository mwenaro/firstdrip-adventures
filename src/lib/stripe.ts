// lib/stripe.ts
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined in environment variables");
}

const stripeConfig: Stripe.StripeConfig = {
  apiVersion: "2025-02-24.acacia",
  typescript: true,
  maxNetworkRetries: 2, // Retry failed requests twice
  timeout: 20000, // 20 second timeout
};

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, stripeConfig);

type StripeEventConstructParams = {
  payload: string | Buffer;
  signature: string;
  webhookSecret?: string;
};

export async function constructStripeEvent({
  payload,
  signature,
  webhookSecret = process.env.STRIPE_WEBHOOK_SECRET,
}: StripeEventConstructParams) {
  if (!webhookSecret) {
    throw new Error("STRIPE_WEBHOOK_SECRET is not defined");
  }

  try {
    return stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook verification failed:", err);
    throw err;
  }
}

// Helper to create payment intent
export async function createPaymentIntent(
  amount: number,
  metadata: Record<string, string>
) {
  return stripe.paymentIntents.create({
    amount,
    currency: "usd",
    automatic_payment_methods: { enabled: true },
    metadata,
  });
}

// Helper to retrieve payment intent
export async function getPaymentIntent(id: string) {
  return stripe.paymentIntents.retrieve(id);
}
