'use client'
import Link from "next/link";

export default function Error() {
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Payment Failed</h1>
        <p>We encountered an issue processing your payment.</p>
        <Link href="/" className="text-blue-600 underline mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    );
  }