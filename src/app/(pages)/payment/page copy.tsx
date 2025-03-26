"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { Tour } from "@/types/tour";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function PaymentPage() {
  // In a real app, you would fetch this data or pass it via props
  const tour: Tour = {
    id: "tour_123",
    name: "Serengeti Safari",
    description: "3-day luxury safari experience",
    price: 1200, // in dollars
    imageUrl: "/safari.jpg",
  };

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
            currency: "usd",
            mode: "payment",
            amount: tour.price * 100, // Convert to cents
          }}
        >
          <CheckoutForm tour={tour} />
        </Elements>
      </div>
    </div>
  );
}
