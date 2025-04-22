"use client";

import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { Button } from "./ui/button";

type CheckoutFormProps = {
  bookingId: string;
  clientSecret: string;
  customerEmail?: string;
  amount: number;
  paymentType: "full" | "25" | "50" | "75" | "custom";
};

export default function CheckoutForm({
  bookingId,
  customerEmail,
  amount,
  paymentType,
  clientSecret,
}: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    try {
      // Trigger form validation
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setError(submitError.message || "Form validation failed");
        setLoading(false);
        return;
      }

      // Confirm the payment
      const { error: confirmationError } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success?bookingId=${bookingId}&amount=${amount}&type=${paymentType}`,
          receipt_email: customerEmail || undefined,
        },
      });

      if (confirmationError) {
        setError(confirmationError.message || "Payment confirmation failed");
        setLoading(false);
      }

      // Don't reset loading to false on success because redirect is immediate
    } catch (err) {
      console.error(err);
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement
        options={{
          fields: {
            billingDetails: {
              email: "auto", // Let Stripe collect email if needed
            },
          },
        }}
      />

      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

      <Button
        type="submit"
        disabled={!stripe || !elements || loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded disabled:opacity-50"
      >
        {loading ? "Processing..." : `Pay $${amount.toFixed(2)}`}
      </Button>
    </form>
  );
}
