// models/Payment.ts
import mongoose, { Document } from "mongoose";

interface IPayment extends Document {
  amount: number;
  currency: string;
  status: string;
  tourId: string;
  customerId?: string;
  customerEmail: string;
  stripePaymentIntentId: string;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new mongoose.Schema<IPayment>(
  {
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    status: { type: String, required: true },
    tourId: { type: String, required: true },
    customerId: { type: String },
    customerEmail: { type: String, required: true },
    stripePaymentIntentId: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Payment =
  mongoose.models.Payment || mongoose.model<IPayment>("Payment", PaymentSchema);
