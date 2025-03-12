import mongoose, { Schema, Document } from "mongoose";

// TypeScript interface for Booking
type Gender = "Male" | "Female" | "Other";

export interface ITourBooking extends Document {
  name: string;
  gender: Gender;
  tel: string;
  citizenship: string;
  arrivalDate: Date;
  departureDate?: Date;
  email: string;
  moreInfo?: string;
  createdAt: Date;
  updatedAt: Date;
}

const TourBookingSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    tel: { type: String, required: true },
    citizenship: { type: String, required: true },
    arrivalDate: { type: Date, required: true },
    departureDate: { type: Date },
    email: { type: String, required: true },
    moreInfo: { type: String },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

export const TourBooking = mongoose.models.TourBooking || mongoose.model<ITourBooking>("TourBooking", TourBookingSchema);
