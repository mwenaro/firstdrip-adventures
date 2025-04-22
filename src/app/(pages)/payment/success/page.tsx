// app/success/page.tsx or similar

import { Suspense } from 'react';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface SuccessPageProps {
  searchParams: Record<string, string>;
}

export default function PaymentSuccessPage({ searchParams }: SuccessPageProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>

      <h1 className="text-3xl font-bold mb-4">
        {searchParams.redirect_status === 'succeeded' ? 'Payment Successful!' : 'Payment Processing'}
      </h1>

      <Suspense fallback={<p>Loading payment details...</p>}>
        <PaymentDetails searchParams={searchParams} />
      </Suspense>

      <p className="text-lg mb-6">
        {searchParams.redirect_status === 'succeeded'
          ? 'Thank you for your payment! A confirmation has been sent to your email.'
          : 'Your payment is being processed. You will receive a confirmation email shortly.'}
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

// ✅ Extracted async server component
async function PaymentDetails({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const { bookingId, payment_intent, amount, type, redirect_status } = searchParams;

  const paymentDetails = payment_intent ? await import('@/lib/stripe-utils').then(m => m.verifyPayment(payment_intent)) : null;

  return (
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
          <span className="font-medium">${parseFloat(amount).toFixed(2)}</span>
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
            redirect_status === 'succeeded' ? 'text-green-600' : 'text-yellow-600'
          }`}
        >
          {redirect_status}
        </span>
      </div>

      {paymentDetails && (
        <div className="flex justify-between">
          <span className="text-gray-600">Stripe Payment ID:</span>
          <span className="font-medium">{paymentDetails.id  }</span>
        </div>
      )}
    </div>
  );
}
