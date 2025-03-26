import Link from 'next/link';

export default function PaymentSuccessPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-lg mb-6">
        Thank you for your booking. We've sent a confirmation to your email.
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