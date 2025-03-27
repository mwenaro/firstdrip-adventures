"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import { Tour } from "@/types/tour";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const tour: Tour = {
    id: "tour_123",
    name: "Serengeti Safari",
    description: "3-day luxury safari experience",
    price: 50,
    imageUrl: "/safari.jpg",
  };

  useEffect(() => {
    async function createPaymentIntent() {
      try {
        const response = await fetch("/api/v1/payment/client-secret", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tourId: tour.id,
            amount: tour.price,
            currency: "usd",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create payment intent");
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    }

    createPaymentIntent();
  }, [tour.id, tour.price]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-6">Loading payment details...</div>
    );
  }

  if (error) {
    return <div className="max-w-2xl mx-auto p-6 text-red-500">{error}</div>;
  }

  if (!clientSecret) {
    return (
      <div className="max-w-2xl mx-auto p-6">Failed to initialize payment</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Complete Your Booking</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">{tour.name}</h2>
        <p className="text-gray-600 mb-4">{tour.description}</p>
        <p className="text-2xl font-bold">${tour.price.toFixed(2)}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <Elements
          stripe={stripePromise}
          options={{
            appearance: { theme: "stripe" },
            clientSecret: clientSecret,
          }}
        >
          <CheckoutForm tour={tour} clientSecret={clientSecret} />
        </Elements>
      </div>
    </div>
  );
}
