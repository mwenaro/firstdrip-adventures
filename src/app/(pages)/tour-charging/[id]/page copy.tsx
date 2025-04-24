"use client"
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, DollarSign } from 'lucide-react';
import { useSession, signIn } from 'next-auth/react';

// Types

type Gender = 'Male' | 'Female' | 'Other';

enum PaymentStatus {
  UNPAID = 'UNPAID',
  PAID = 'PAID',
}

enum TourStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
}

type TourBooking = {
  _id: string;
  name: string;
  gender: Gender;
  tel: string;
  citizenship: string;
  travelDate: string;
  numOfDays: number;
  email: string;
  specialRequest?: string;
  totalAmount: number;
  paymentStatus: PaymentStatus;
  tourStatus: TourStatus;
  createdAt: string;
  updatedAt: string;
};

const TourCharging = () => {
  const [tour, setTour] = useState<TourBooking | null>(null);
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams()
//   data: session,
  const {  status } = useSession();

  useEffect(() => {

    if (status === 'unauthenticated') {
      signIn(undefined, { callbackUrl: window.location.href });
    }
  }, [status]);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const res = await fetch(`/api/v1/tour-booking/${params.id}`);
        if (!res.ok) {
          router.back();
          return;
        }
        const data = await res.json();

        // If totalAmount is already set, go back
        if (data.totalAmount && data.totalAmount > 0) {
          router.back();
          return;
        }

        setTour(data);
        setAmount(data.totalAmount?.toString() || '');
      } catch (error) {
        console.error('Error fetching tour:', error);
        router.back();
      }
    };

    if (status === 'authenticated') {
      fetchTour();
    }
  }, [params.id, status, router]);

  const updateAmount = async () => {
    try {
      if (!amount || parseFloat(amount) <= 0) {
        alert('Enter a valid amount');
        return;
      }
      setLoading(true);
      const res = await fetch(`/api/v1/tour-booking/${params.id}/tour-charging`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ totalAmount: parseFloat(amount) }),
      });
      if (!res.ok) throw new Error('Failed to update amount');
      setLoading(false);
      alert('Amount updated successfully!');
    } catch (error) {
      console.error('Error updating amount:', error);
      setLoading(false);
    }
  };

  if (status === 'loading') return <div className="text-center py-10">Checking session...</div>;
  if (!tour) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold">Update Tour Charge</h2>
          <p className="text-gray-600">For: {tour.name}</p>
          <div className="flex items-center gap-2">
            <DollarSign className="text-green-600" />
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full"
            />
          </div>
          <Button onClick={updateAmount} disabled={loading} className="w-full">
            {loading ? (
              <Loader2 className="animate-spin mr-2" />
            ) : (
              'Update Amount'
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TourCharging;
