"use client";
// ✅ app/success/page.tsx
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { verifyPayment } from "@/lib/stripe-utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PaymentDetails {
  id?: string;
  // Add other properties you expect from verifyPayment
}

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  const [loading, setLoading] = useState(true);

  const bookingId = searchParams.get("bookingId");
  const payment_intent = searchParams.get("payment_intent");
  const amount = searchParams.get("amount");
  const type = searchParams.get("type");
  const redirect_status = searchParams.get("redirect_status");

  useEffect(() => {
    const verifyPaymentDetails = async () => {
      if (payment_intent) {
        try {
          const details = await verifyPayment(payment_intent);
          setPaymentDetails(details);
        } catch (error) {
          console.error("Payment verification failed:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    verifyPaymentDetails();
  }, [payment_intent]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        </div>
        <h2 className="text-3xl font-bold mb-4">Verifying payment...</h2>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>

      <h2 className="text-3xl font-bold mb-4">
        {redirect_status === "succeeded"
          ? "Payment Successful!"
          : "Payment Processing"}
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-left space-y-3">
        <h2 className="text-xl font-semibold mb-4">Booking Details</h2>

        {bookingId && (
          <div className="flex justify-between">
            <span className="text-gray-600">Booking ID:</span>
            <span className="font-medium">{bookingId}</span>
          </div>
        )}

        {amount && (
          <div className="flex justify-between">
            <span className="text-gray-600">Amount:</span>
            <span className="font-medium">
              ${parseFloat(amount).toFixed(2)}
            </span>
          </div>
        )}

        {type && (
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Type:</span>
            <span className="font-medium">
              {type === "full" ? "Full Payment" : `${type}% Partial`}
            </span>
          </div>
        )}

        <div className="flex justify-between">
          <span className="text-gray-600">Payment Status:</span>
          <span
            className={`font-medium ${
              redirect_status === "succeeded"
                ? "text-green-600"
                : "text-yellow-600"
            }`}
          >
            {redirect_status}
          </span>
        </div>

        {paymentDetails?.id && (
          <div className="flex justify-between">
            <span className="text-gray-600">Stripe Payment ID:</span>
            <span className="font-medium">{paymentDetails.id}</span>
          </div>
        )}
      </div>

      <p className="text-lg mb-6">
        {redirect_status === "succeeded"
          ? "Thank you for your payment! A confirmation has been sent to your email."
          : "Your payment is being processed. You will receive a confirmation email shortly."}
      </p>

      <Link
        href="/"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
}