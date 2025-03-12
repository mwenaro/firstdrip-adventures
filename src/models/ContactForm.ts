import mongoose, { Schema, Document, Model } from "mongoose";
import { ISchool } from "./School"; // Import the ISchool interface

// Define the TypeScript interface for the ContactForm document
export interface IContactForm extends Document {
  name: string;
  email: string;
  message: string;
  createAt?: Date;
  updatedAt?: Date;
}

// Define the schema
const ContactFormSchema: Schema = new Schema<IContactForm>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create and export the model
export const ContactForm: Model<IContactForm> =
  mongoose.models.ContactForm ||
  mongoose.model<IContactForm>("ContactForm", ContactFormSchema);
