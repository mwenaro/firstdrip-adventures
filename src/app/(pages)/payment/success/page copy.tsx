import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { verifyPayment } from '@/lib/stripe-utils';

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: { 
    tour_id: string;
    payment_intent: string;
    payment_intent_client_secret: string;
    redirect_status: string;
  }
}) {
  // Verify the payment on the server side
  const paymentDetails = await verifyPayment(searchParams.payment_intent);
console.log({paymentDetails})
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      
      <h1 className="text-3xl font-bold mb-4">
        {searchParams.redirect_status === 'succeeded' 
          ? 'Payment Successful!' 
          : 'Payment Processing'}
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 text-left">
        <h2 className="text-xl font-semibold mb-4">Booking Confirmation</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Tour ID:</span>
            <span className="font-medium">{searchParams.tour_id}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Intent:</span>
            <span className="font-medium">{searchParams.payment_intent}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Status:</span>
            <span className={`font-medium ${
              searchParams.redirect_status === 'succeeded' 
                ? 'text-green-600' 
                : 'text-yellow-600'
            }`}>
              {searchParams.redirect_status}
            </span>
          </div>
        </div>
      </div>

      <p className="text-lg mb-6">
        {searchParams.redirect_status === 'succeeded'
          ? 'Thank you for your booking! A confirmation has been sent to your email.'
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