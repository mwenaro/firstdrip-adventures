"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import { Tour } from "@/types/tour";
import CheckoutForm from "@/components/CheckoutForm";
// import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function PaymentPage() {
  const [params, setParams] = useState<URLSearchParams | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setParams(searchParams);
    }
  }, []);

  const bookingId = params?.get("bookingId");
  const customerEmail = params?.get("customerEmail");
  const totalAmount = Number(params?.get("totalAmount") || 0);

  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [paymentType, setPaymentType] = useState<
    "full" | "25" | "50" | "75" | "custom"
  >("full");
  const [customAmount, setCustomAmount] = useState<number>(0);

  const tour: Tour = {
    id: "tour_123",
    name: "Serengeti Safari",
    description: "3-day luxury safari experience",
    price: 1000,
    imageUrl: "/safari.jpg",
  };

  const getAmountToPay = () => {
    switch (paymentType) {
      case "25":
        return +totalAmount * 0.25;
      case "50":
        return +totalAmount * 0.5;
      case "75":
        return +totalAmount * 0.75;
      case "custom":
        return customAmount;
      default:
        return totalAmount;
    }
  };

  const createPaymentIntent = async () => {
    if (!bookingId || !customerEmail) {
      setError("Missing bookingId or customerEmail in URL");
      return;
    }

    setLoading(true);
    try {
      const amount = +getAmountToPay();
      if (amount < 10) throw new Error("Minimum amount is $10");

      const response = await fetch("/api/v1/payment/client-secret", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId,
          customerEmail,
          amount,
          currency: "usd",
          paymentType,
        }),
      });

      if (!response.ok) throw new Error("Failed to create payment intent");

      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    createPaymentIntent();
  }, [paymentType, customAmount, createPaymentIntent]);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Complete Your Booking</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">{tour.name}</h2>
        <p className="text-gray-600 mb-4">{tour.description}</p>
        <p className="text-2xl font-bold">${totalAmount.toFixed(2)}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Select Payment Option</h3>
        <div className="space-y-2">
          {["full", "25", "50", "75", "custom"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="radio"
                value={type}
                checked={paymentType === type}
                onChange={() => setPaymentType(type as any)}
              />
              {type === "full" && `Full Payment ($${totalAmount})`}
              {type === "25" && `25% ($${(totalAmount * 0.25).toFixed(2)})`}
              {type === "50" && `50% ($${(totalAmount * 0.5).toFixed(2)})`}
              {type === "75" && `75% ($${(totalAmount * 0.75).toFixed(2)})`}
              {type === "custom" && "Custom Amount"}
            </label>
          ))}

          {paymentType === "custom" && (
            <input
              type="number"
              min={10}
              max={totalAmount}
              className="w-full p-2 border rounded"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(Number(e.target.value))}
            />
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {loading && <p>Loading payment form...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && clientSecret && (
          <Elements
            stripe={stripePromise}
            options={{
              appearance: { theme: "stripe" },
              clientSecret: clientSecret,
            }}
          >
            <CheckoutForm
              // tour={tour}
              clientSecret={clientSecret}
              amount={getAmountToPay()}
              paymentType={paymentType}
              bookingId={bookingId!}
              customerEmail={customerEmail!}
            />
          </Elements>
        )}
      </div>
    </div>
  );
}
