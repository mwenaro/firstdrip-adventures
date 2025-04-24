// models/TourBooking.ts

import { PaymentStatus, TourStatus } from "@/types/tour";
import mongoose, { Schema, Document } from "mongoose";


type Gender = "male" | "female" | "Other";

export interface ITourBooking extends Document {
  name: string;
  gender: Gender;
  tel: string;
  citizenship: string;
  travelDate: Date;
  numOfDays: number;
  email: string;
  specialRequest?: string;
  totalAmount: number;
  paymentStatus: PaymentStatus;
  tourStatus: TourStatus;
  createdAt: Date;
  updatedAt: Date;
}

const TourBookingSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    tel: { type: String, required: true },
    citizenship: { type: String, required: true },
    travelDate: { type: Date, required: true },
    numOfDays: { type: Number, default: 1 },
    email: { type: String, required: true },
    specialRequest: { type: String },

    // 💰 Payment-related
    totalAmount: { type: Number,  default:0 },
    paymentStatus: {
      type: String,
      enum: Object.values(PaymentStatus),
      default: PaymentStatus.UNPAID,
    },

    // 🧳 Booking Status
    tourStatus: {
      type: String,
      enum: Object.values(TourStatus),
      default: TourStatus.PENDING,
    },
  },
  {
    timestamps: true,
  }
);

export const TourBooking =
  mongoose.models.TourBooking ||
  mongoose.model<ITourBooking>("TourBooking", TourBookingSchema);
