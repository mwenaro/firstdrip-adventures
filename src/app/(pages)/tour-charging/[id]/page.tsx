"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, DollarSign } from "lucide-react";
import { useSession, signIn } from "next-auth/react";

// Types
type Gender = "Male" | "Female" | "Other";

enum PaymentStatus {
  UNPAID = "UNPAID",
  PAID = "PAID",
}

enum TourStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
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
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { data: session, status = true } = useSession();
  console.log(session);
  useEffect(() => {
    if (status === "unauthenticated") {
      signIn(undefined, { callbackUrl: window.location.href });
    }
  }, [status]);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        if (!params.id) {
          setError("Tour ID is missing");
          return;
        }

        setLoading(true);
        const res = await fetch(`/api/v1/tour-booking/${params.id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch tour details");
        }

        const data = await res.json();

        if (data.totalAmount && data.totalAmount > 0) {
          router.back();
          return;
        }

        setTour(data);
        setAmount(data.totalAmount?.toString() || "");
        setError(null);
      } catch (err) {
        console.error("Error fetching tour:", err);
        setError(
          err instanceof Error ? err.message : "Failed to load tour details"
        );
        router.back();
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated" && params.id) {
      fetchTour();
    }
  }, [params.id, status, router]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      // Allows numbers with up to 2 decimal places
      setAmount(value);
    }
  };

  const updateAmount = async () => {
    try {
      const amountValue = parseFloat(amount);
      if (isNaN(amountValue) || amountValue <= 0) {
        setError("Please enter a valid amount greater than 0");
        return;
      }

      setLoading(true);
      setError(null);

      const res = await fetch(
        `/api/v1/tour-booking/${params.id}/tour-charging`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ totalAmount: amountValue }),
        }
      );

      if (!res.ok) {
        throw new Error((await res.text()) || "Failed to update amount");
      }

      alert("Amount updated successfully!");
      router.back();
    } catch (err) {
      console.error("Error updating amount:", err);
      setError(err instanceof Error ? err.message : "Failed to update amount");
    } finally {
      setLoading(false);
    }
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
      </div>
    );
  }

  if (!tour) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
        )}
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <Card>
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-semibold">Update Tour Charge</h2>
          <div className="space-y-2">
            <p className="text-gray-600">
              <span className="font-medium">Customer:</span> {tour.name}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Email:</span> {tour.email}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Travel Date:</span>{" "}
              {new Date(tour.travelDate).toLocaleDateString()}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <DollarSign className="text-green-600" />
            <Input
              type="text"
              inputMode="decimal"
              value={amount}
              onChange={handleAmountChange}
              className="w-full"
              placeholder="Enter amount"
            />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <Button onClick={updateAmount} disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Updating...
              </>
            ) : (
              "Update Amount"
            )}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TourCharging;
