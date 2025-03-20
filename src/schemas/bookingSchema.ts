import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  gender: z.string().min(1, { message: "Gender is required." }),
  tel: z.string().min(10, { message: "Telephone number must be at least 10 digits." }),
  citizenship: z.string().min(1, { message: "Citizenship is required." }),
  travelDate: z.date().min(new Date(), { message: "Date of Travel must be in the future." }),
  numOfDays: z.number().min(1, { message: "Number of Days can't be less than 1" }),
  email: z.string().email({ message: "Invalid email address." }),
  specialRequest: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;