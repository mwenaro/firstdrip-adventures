// models/Payment.ts

import { PaymentMethod, PaymentOption, PaymentStatus } from "@/types/tour";
import mongoose, { Schema, Document } from "mongoose";

export interface IPayment extends Document {
  bookingId: mongoose.Types.ObjectId;
  method: PaymentMethod;
  status: PaymentStatus;
  paidAmount: number;
  paymentDate: Date;
  stripePaymentId?: string;
  paymentOption: PaymentOption;
  note?: string;
}

const PaymentSchema = new Schema<IPayment>(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TourBooking",
      required: true,
    },
    method: {
      type: String,
      enum: Object.values(PaymentMethod),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(PaymentStatus),
      default: PaymentStatus.UNPAID,
    },
    paidAmount: {
      type: Number,
      required: true,
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
    stripePaymentId: { type: String },
    paymentOption: {
      type: String,
      enum: Object.values(PaymentOption),
      default: PaymentOption.FULL,
    },
    note: { type: String },
  },
  { timestamps: true }
);

export const Payment =
  mongoose.models.Payment || mongoose.model<IPayment>("Payment", PaymentSchema);
