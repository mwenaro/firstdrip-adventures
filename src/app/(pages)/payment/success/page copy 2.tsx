import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { verifyPayment } from '@/lib/stripe-utils';

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const paymentIntentId = searchParams.payment_intent as string;
  const paymentIntentClientSecret = searchParams.payment_intent_client_secret as string;
  console.log({paymentIntentClientSecret})
  // Verify the payment on the server side
  const paymentDetails = await verifyPayment(paymentIntentId);

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-left">
        <h2 className="text-xl font-semibold mb-4">Booking Confirmation</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Tour:</span>
            <span className="font-medium">{paymentDetails?.tourName || 'Serengeti Safari'}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Amount Paid:</span>
            <span className="font-medium">
              ${(paymentDetails?.amount ? paymentDetails.amount / 100 : 0).toFixed(2)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Confirmation #:</span>
            <span className="font-medium">{paymentIntentId}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <span className="font-medium text-green-600">Confirmed</span>
          </div>
        </div>
      </div>

      <p className="text-lg mb-6">
        Thank you for your booking! We&apos;ve sent a confirmation to your email address.
        Your tour details and itinerary will be sent within 24 hours.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/tours"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Browse More Tours
        </Link>
        <Link
          href="/account/bookings"
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        >
          View My Bookings
        </Link>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="font-medium mb-2">Need Help?</h3>
        <p className="text-sm text-gray-600">
          Contact our support team at <a href="mailto:support@safariadventures.com" className="text-blue-600">support@safariadventures.com</a> or call +1 (555) 123-4567
        </p>
      </div>
    </div>
  );
}