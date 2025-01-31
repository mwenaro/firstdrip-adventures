import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  gender: z.string().min(1, { message: "Gender is required." }),
  tel: z.string().min(10, { message: "Telephone number must be at least 10 digits." }),
  citizenship: z.string().min(1, { message: "Citizenship is required." }),
  arrivalDate: z.date().min(new Date(), { message: "Arrival date must be in the future." }),
  departureDate: z.date().min(new Date(), { message: "Departure date must be in the future." }),
  email: z.string().email({ message: "Invalid email address." }),
  moreInfo: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;