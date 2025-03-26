"use client";

import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { Tour } from "@/types/tour";

export default function CheckoutForm({
  tour,
  clientSecret,
}: {
  tour: Tour;
  clientSecret: string;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setLoading(true);
    setError(null);

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret, // Now properly passed to confirmPayment
        confirmParams: {
          return_url: `${window.location.origin}/payment/success?tour_id=${tour.id}`,
          receipt_email: "customer@example.com", // In real app, collect from form
        },
      });

      if (error) {
        setError(error.message || "Payment failed");
      }
    } catch (err) {
      console.log(err)
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