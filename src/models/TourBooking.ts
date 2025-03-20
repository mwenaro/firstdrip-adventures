import mongoose, { Schema, Document } from "mongoose";

// TypeScript interface for Booking
type Gender = "Male" | "Female" | "Other";

export interface ITourBooking extends Document {
  name: string;
  gender: Gender;
  tel: string;
  citizenship: string;
  travelDate: Date;
  numOfDays: number;
  email: string;
  specialRequest?: string;
  createdAt: Date;
  updatedAt: Date;
}

const TourBookingSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    tel: { type: String, required: true },
    citizenship: { type: String, required: true },
    travelDate: { type: Date, required: true },
    numOfDays: { type: Number, default: 1 },
    email: { type: String, required: true },
    specialRequest: { type: String },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

export const TourBooking =
  mongoose.models.TourBooking ||
  mongoose.model<ITourBooking>("TourBooking", TourBookingSchema);
