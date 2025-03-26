"use client";

// import { useStripe, useElements, PaymentElement } from "@stripe/stripe-js";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"; 

import { FormEvent, useState } from "react";
import { Tour } from "@/types/tour";

export default function CheckoutForm({ tour }: { tour: Tour }) {
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
      const { error: stripeError } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success`,
          receipt_email: "customer@example.com", // In a real app, collect this from form
        },
      });

      if (stripeError) {
        setError(stripeError.message || "Payment failed");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement />

      {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded disabled:opacity-50"
      >
        {loading ? "Processing..." : `Pay $${tour.price.toFixed(2)}`}
      </button>
    </form>
  );
}
